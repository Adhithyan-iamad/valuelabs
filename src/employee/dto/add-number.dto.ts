import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class Addnumberinfo {
  @IsInt({ message: 'num1 should be  integer' })
  @Type(() => Number)
  num1: number;

  @IsInt({ message: 'num2 should be  integer' })
  @Type(() => Number)
  num2: number;
}
