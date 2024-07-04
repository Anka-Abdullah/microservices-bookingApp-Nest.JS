import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationService: ReservationsService) {}

  @Post()
  async create(@Body() createReservationDto: CreateReservationDto) {
    try {
      return await this.reservationService.create(createReservationDto);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.reservationService.findAll();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.reservationService.findOne(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
    try {
      return await this.reservationService.update(id, updateReservationDto);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.reservationService.remove(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
