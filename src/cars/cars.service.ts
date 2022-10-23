import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Car } from './cars.types';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: 1, make: 'Ford', model: 'F150', year: 2015 },
    { id: 2, make: 'Chevy', model: 'Silverado', year: 2016 },
    { id: 3, make: 'Dodge', model: 'Ram', year: 2017 },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new HttpException('Car not found', HttpStatus.NOT_FOUND);
    }
    return car;
  }
}
