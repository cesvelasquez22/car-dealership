import { IsInt, IsString } from 'class-validator';
export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;

  @IsInt()
  readonly year: number;
}
