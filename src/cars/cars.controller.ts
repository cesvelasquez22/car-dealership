import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './cars.types';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  async findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOne(id);
  }

  @Post()
  async create(@Body() car: Car) {
    return this.carsService.create(car);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() car: Car) {
    return this.carsService.update(id, car);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.delete(id);
  }
}
