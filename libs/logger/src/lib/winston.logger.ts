import { createLogger, format, transports } from 'winston';

// custom log display format
const customFormat = format.printf(({ timestamp, level, stack, message }) => {
  return `${timestamp} - [${level.toUpperCase().padEnd(7)}] - ${
    stack || message
  }`;
});

const options = {
  file: {
    filename: 'error.log',
    level: 'error',
  },
  console: {
    level: 'silly',
  },
};

// for development environment
const devLogger = {
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    customFormat
  ),
  transports: [new transports.Console(options.console)],
};

// for production environment
const prodLogger = {
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.json()
  ),
  transports: [
    new transports.File(options.file),
    new transports.File({
      filename: 'combine.log',
      level: 'info',
    }),
  ],
};

// export log instance based on the current environment
const instanceLogger =
  process.env.NODE_ENV === 'production' ? prodLogger : devLogger;

export const instance = createLogger(instanceLogger);

// import { transports, format } from 'winston';
// import {
//   WinstonModule,
//   utilities as nestWinstonModuleUtilities,
// } from 'nest-winston';

// export const LoggerFactory = (appName: string) => {
//   let consoleFormat;

//   const DEBUG = process.env.DEBUG;
//   const USE_JSON_LOGGER = process.env.USE_JSON_LOGGER;

//   if (USE_JSON_LOGGER === 'true') {
//     consoleFormat = format.combine(
//       format.ms(),
//       format.timestamp(),
//       format.json()
//     );
//   } else {
//     consoleFormat = format.combine(
//       format.timestamp(),
//       format.ms(),
//       nestWinstonModuleUtilities.format.nestLike(appName, {
//         colors: true,
//         prettyPrint: true,
//       })
//     );
//   }

//   return WinstonModule.createLogger({
//     level: DEBUG ? 'debug' : 'info',
//     transports: [new transports.Console({ format: consoleFormat })],
//   });
// };
