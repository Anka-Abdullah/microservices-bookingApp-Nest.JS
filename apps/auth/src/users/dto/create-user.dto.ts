import {
  IsArray,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  IsEnum,
  IsBoolean,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

enum Gender {
  Male = 'male',
  Female = 'female',
}

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  roles: string[];

  @IsString()
  @IsOptional()
  about: string;

  @IsArray()
  @IsString({ each: true })
  interest: string[];

  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  birthday: Date;

  @IsNumber()
  @IsOptional()
  height: number;

  @IsNumber()
  @IsOptional()
  weight: number;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}
