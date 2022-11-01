import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    uuid: uuid(),
    brand: 'Ford',
    model: 'Mustang',
    year: 1969,
  },
  {
    uuid: uuid(),
    brand: 'Honda',
    model: 'Civic',
    year: 2010,
  },
  {
    uuid: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
    year: 2010,
  },
  {
    uuid: uuid(),
    brand: 'BMW',
    model: 'M3',
    year: 2010,
  },
];
