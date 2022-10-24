import { IsInt, IsOptional, IsString, IsUUID } from 'class-validator';
export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly uuid?: string;

  @IsString()
  @IsOptional()
  readonly make?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;

  @IsInt()
  @IsOptional()
  readonly year?: number;
}
