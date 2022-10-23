import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  findAll(): string[] {
    return ['Ford', 'Chevy'];
  }
}
