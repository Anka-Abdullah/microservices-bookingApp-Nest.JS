import { CreateChargeDto } from '@app/common/dto/create-charge.dto';
import { Type } from 'class-transformer';
import { IsDateString, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

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

  @ValidateNested()
  @Type(() => CreateChargeDto)
  charge: CreateChargeDto;
}
