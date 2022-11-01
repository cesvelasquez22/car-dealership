import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Ford',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: 'BMW',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: 'Mercedes',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
