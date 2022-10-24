import { IsInt, IsString } from 'class-validator';
export class CreateCarDto {
  @IsString()
  readonly make: string;

  @IsString()
  readonly model: string;

  @IsInt()
  readonly year: number;
}
