import { Test, TestingModule } from '@nestjs/testing';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

describe('ReservationsController', () => {
  let controller: ReservationsController;
  let service: ReservationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationsController],
      providers: [ReservationsService],
    }).compile();

    controller = module.get<ReservationsController>(ReservationsController);
    service = module.get<ReservationsService>(ReservationsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should return created reservation', async () => {
      const reservationDto: CreateReservationDto = { startDate: new Date(), endDate: new Date(), placeId: '123', invoiceId: '456' };
      jest.spyOn(service, 'create').mockResolvedValue(reservationDto);

      expect(await controller.create(reservationDto)).toBe(reservationDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of reservations', async () => {
      const reservations = [{ id: '1', startDate: new Date(), endDate: new Date(), placeId: '123', invoiceId: '456' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(reservations);

      expect(await controller.findAll()).toBe(reservations);
    });
  });

  describe('findOne', () => {
    it('should return a reservation by ID', async () => {
      const reservation = { id: '1', startDate: new Date(), endDate: new Date(), placeId: '123', invoiceId: '456' };
      jest.spyOn(service, 'findOne').mockResolvedValue(reservation);

      expect(await controller.findOne('1')).toBe(reservation);
    });
  });

  describe('update', () => {
    it('should update a reservation by ID', async () => {
      const updateDto: UpdateReservationDto = { startDate: new Date(), endDate: new Date(), placeId: '123', invoiceId: '456' };
      jest.spyOn(service, 'update').mockResolvedValue(updateDto);

      expect(await controller.update('1', updateDto)).toBe(updateDto);
    });
  });

  describe('remove', () => {
    it('should remove a reservation by ID', async () => {
      jest.spyOn(service, 'remove').mockResolvedValue(true);

      expect(await controller.remove('1')).toBe(true);
    });
  });
});
