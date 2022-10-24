import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './car.types';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  async findAll() {
    return this.carsService.findAll();
  }

  @Get(':uuid')
  async findOne(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.carsService.findOne(uuid);
  }

  @Post()
  async create(@Body() car: Car) {
    return this.carsService.create(car);
  }

  @Patch(':uuid')
  async update(@Param('uuid', ParseUUIDPipe) uuid: string, @Body() car: Car) {
    return this.carsService.update(uuid, car);
  }

  @Delete(':uuid')
  async delete(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.carsService.delete(uuid);
  }
}
