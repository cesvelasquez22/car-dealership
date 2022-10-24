import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { uuid: uuid(), make: 'Ford', model: 'F150', year: 2015 },
    { uuid: uuid(), make: 'Chevy', model: 'Silverado', year: 2016 },
    { uuid: uuid(), make: 'Dodge', model: 'Ram', year: 2017 },
  ];

  findAll() {
    return this.cars;
  }

  findOne(uuid: string) {
    const car = this.cars.find((car) => car.uuid === uuid);
    if (!car) throw new NotFoundException('Car not found');

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = { uuid: uuid(), ...createCarDto };
    this.cars.push(car);
    return car;
  }

  update(uuid: string, car: Car) {
    const index = this.cars.findIndex((car) => car.uuid === uuid);
    this.cars[index] = car;
  }

  delete(uuid: string) {
    const index = this.cars.findIndex((car) => car.uuid === uuid);
    this.cars.splice(index, 1);
  }
}
