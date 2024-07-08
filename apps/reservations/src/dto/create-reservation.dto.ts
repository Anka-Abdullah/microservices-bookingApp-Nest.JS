import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateReservationDto {
  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;

  @IsString()
  @IsNotEmpty({ message: 'Place ID is required' })
  placeId: string;

  @IsString()
  @IsNotEmpty({ message: 'Invoice ID is required' })
  invoiceId: string;
}
