import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyController } from './property.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver'; 

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,  // <-- This is the required line
      autoSchemaFile: true, // or your existing schema config
    }),
  ],
  controllers: [AppController, PropertyController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
