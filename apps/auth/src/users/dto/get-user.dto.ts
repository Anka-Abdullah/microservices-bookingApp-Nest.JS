import { IsEmail, IsString, IsArray, IsEnum, IsOptional, IsDate, IsNumber, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

enum Gender {
  Male = 'male',
  Female = 'female',
}

export class GetUserDto {
  @IsEmail()
  email: string;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsDate()
  @Type(() => Date)
  birthday: Date;

  @IsString()
  @IsOptional()
  about: string;

  @IsArray()
  @IsString({ each: true })
  interest: string[];

  @IsString()
  @IsOptional()
  horoscope: string;

  @IsString()
  @IsOptional()
  zodiac: string;

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
