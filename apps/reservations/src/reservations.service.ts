import { Inject, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepository } from './reservations.repository';
import { PAYMENT_SERVICE } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationRepository: ReservationsRepository,
    @Inject(PAYMENT_SERVICE) private readonly paymentService: ClientProxy,
  ) {}

  async create(
    createReservationDto: CreateReservationDto,
    userId: string,
  ): Promise<any> {
    const reservationData = {
      ...createReservationDto,
      userId,
    };
  
    try {
      const paymentResponse = this.paymentService.send('create_charge', createReservationDto.charge);

      const reservation = await this.reservationRepository.create(reservationData);
  
      return reservation;
    } catch (error) {
      console.error(`Error creating reservation: ${error.message}`);
      throw new Error(`Error creating reservation: ${error.message}`);
    }
  }

  async findAll(): Promise<any[]> {
    try {
      return await this.reservationRepository.find({});
    } catch (error) {
      throw new Error(`Error finding reservations: ${error.message}`);
    }
  }

  async findOne(_id: string): Promise<any> {
    try {
      return await this.reservationRepository.findOne({ _id });
    } catch (error) {
      throw new Error(
        `Error finding reservation with id ${_id}: ${error.message}`,
      );
    }
  }

  async update(
    _id: string,
    updateReservationDto: UpdateReservationDto,
  ): Promise<any> {
    try {
      return await this.reservationRepository.findOneAndUpdate(
        { _id },
        { $set: updateReservationDto },
      );
    } catch (error) {
      throw new Error(
        `Error updating reservation with id ${_id}: ${error.message}`,
      );
    }
  }

  async remove(_id: string): Promise<any> {
    try {
      return await this.reservationRepository.findOneAndDelete({ _id });
    } catch (error) {
      throw new Error(
        `Error removing reservation with id ${_id}: ${error.message}`,
      );
    }
  }
}
