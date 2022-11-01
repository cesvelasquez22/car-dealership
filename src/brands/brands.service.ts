import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
  ];
  create({ name }: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand ${id} not found`);
    }
    return brand;
  }

  update(id: string, { name }: UpdateBrandDto) {
    const brandDB = this.findOne(id);
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brand.name = name;
        brand.updatedAt = new Date();
      }
      return brand;
    });
    return brandDB;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  populateBrands(brands: Brand[]) {
    this.brands = brands;
  }
}
