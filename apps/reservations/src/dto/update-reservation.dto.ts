import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateReservationDto {
  @IsDateString()
  @IsOptional()
  startDate?: Date;

  @IsDateString()
  @IsOptional()
  endDate?: Date;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  placeId?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  invoiceId?: string;
}
