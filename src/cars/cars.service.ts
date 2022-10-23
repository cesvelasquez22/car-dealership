import { Injectable, NotFoundException } from '@nestjs/common';
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
    if (!car) throw new NotFoundException('Car not found');

    return car;
  }

  create(car: Car) {
    this.cars.push(car);
  }

  update(id: number, car: Car) {
    const index = this.cars.findIndex((car) => car.id === id);
    this.cars[index] = car;
  }

  delete(id: number) {
    const index = this.cars.findIndex((car) => car.id === id);
    this.cars.splice(index, 1);
  }
}
