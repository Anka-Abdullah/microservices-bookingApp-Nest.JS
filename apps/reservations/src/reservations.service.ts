import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepository } from './reservations.repository';

@Injectable()
export class ReservationsService {
  constructor(private readonly reservationRepository: ReservationsRepository) {}

  async create(createReservationDto: CreateReservationDto): Promise<any> {
    const reservationData = {
      ...createReservationDto,
      userId: this.getUserId(), 
    };

    try {
      return await this.reservationRepository.create(reservationData);
    } catch (error) {
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
      throw new Error(`Error finding reservation with id ${_id}: ${error.message}`);
    }
  }

  async update(_id: string, updateReservationDto: UpdateReservationDto): Promise<any> {
    try {
      return await this.reservationRepository.findOneAndUpdate(
        { _id },
        { $set: updateReservationDto },
      );
    } catch (error) {
      throw new Error(`Error updating reservation with id ${_id}: ${error.message}`);
    }
  }

  async remove(_id: string): Promise<any> {
    try {
      return await this.reservationRepository.findOneAndDelete({ _id });
    } catch (error) {
      throw new Error(`Error removing reservation with id ${_id}: ${error.message}`);
    }
  }

  // Metode untuk mendapatkan userId secara dinamis, misalnya dari konteks pengguna yang saat ini sedang masuk
  private getUserId(): string {
    // Implementasikan logika untuk mendapatkan userId
    // Contoh: return this.authService.getUserId();
    return 'dynamic-user-id'; // Placeholder
  }
}
