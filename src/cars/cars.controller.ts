import { Controller, Get, Param } from '@nestjs/common';
import { Car } from './cars.types';

@Controller('cars')
export class CarsController {
  private cars = [
    { id: 1, make: 'Ford', model: 'F150', year: 2015 },
    { id: 2, make: 'Chevy', model: 'Silverado', year: 2016 },
    { id: 3, make: 'Dodge', model: 'Ram', year: 2017 },
  ];
  @Get()
  findAll(): Car[] {
    return this.cars;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Car {
    return this.cars.find((car) => car.id === +id);
  }
}
