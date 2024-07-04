import {
  IsEmail,
  IsString,
  IsArray,
  IsEnum,
  IsOptional,
  IsDate,
  IsNumber,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

enum Gender {
  Male = 'male',
  Female = 'female',
}

export class GetUserDto {
  @IsString()
  @IsNotEmpty()
  _id: string;
}
