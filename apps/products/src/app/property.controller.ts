import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {
  @Get()
  getAllProperties() {
    Logger.log('logger here.');
    return 'This action returns all properties, OK?';
  }
  @Get(':id')
  getPropertyById(@Param('id') id: string) {
    return `This action returns a #${id} property`;
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createProperty(@Body() body: CreatePropertyDto) {
    const abc = body.name;
    const req = {
      body: {
        name: 'Daniel Duuch',
        email: 'daniel.duuch@greatmail.com',
        password: 'myGreatPassword',
      },
    };
    console.log('logger here.', body.name);
    Logger.log(`body: ${body.name}`);
    Logger.debug(`body: ${body.name}`);
    Logger.warn(`body: ${req.body.name}`);
    Logger.error(`body: ${req.body.name}`);
    return body;
  }

  @Put(':id')
  updateProperty(@Param('id') id: string, @Body() property: any) {
    return `This action updates a #${id} property`;
  }
  @Delete(':id')
  deleteProperty(@Param('id') id: string) {
    return `This action removes a #${id} property`;
  }
}
