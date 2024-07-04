import { Type } from 'class-transformer';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateReservationDto {
  @IsDateString()
  @Type(() => Date)
  startDate: Date;

  @IsDateString()
  @Type(() => Date)
  endDate: Date;

  @IsString()
  @IsNotEmpty({ message: 'Place ID is required' })
  placeId: string;

  @IsString()
  @IsNotEmpty({ message: 'Invoice ID is required' })
  invoiceId: string;
}
