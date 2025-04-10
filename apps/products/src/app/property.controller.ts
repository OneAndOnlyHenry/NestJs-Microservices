import {
  Body,
  Controller,
  Delete,
  Get,
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
    return 'This action returns all properties, OK?';
  }
  @Get(':id')
  getPropertyById(@Param('id') id: string) {
    return `This action returns a #${id} property`;
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createProperty(@Body() body: CreatePropertyDto) {
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
