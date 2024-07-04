import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { getHoroscopeSign } from './utils/horoscope.util';
import { getZodiacSign } from './utils/zodiac.util';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const horoscope = getHoroscopeSign(new Date(createUserDto.birthday));
    const zodiac = getZodiacSign(new Date(createUserDto.birthday));
    await this.validateCreateUserDto(createUserDto);
    return this.usersRepository.create({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
      horoscope,
      zodiac,
    });
  }
  private async validateCreateUserDto(createUserDto: CreateUserDto) {
    try {
      await this.usersRepository.findOne({ email: createUserDto.email });
    } catch (err) {
      return;
    }
    throw new UnprocessableEntityException('Email already exists.');
  }

  async verifyUser(email: string, password: string) {
    const user = await this.usersRepository.findOne({ email: email });
    const passwordIsValid = bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      throw new UnauthorizedException('Credentials are not valid!');
    }
    return user;
  }

  async findOneByEmail(email: string): Promise<any> {
    try {
      return await this.usersRepository.findOne({ email });
    } catch (error) {
      throw new Error(
        `Error finding user with email ${email}: ${error.message}`,
      );
    }
  }

  async getUser(getUserDto : GetUserDto): Promise<any> {
    try {
      return await this.usersRepository.findOne(getUserDto);
    } catch (error) {
      throw new Error(`Error finding user. ${error.message}`);
    }
  }

  async update(_id: string, updateUserDto: UpdateUserDto): Promise<any> {
    try {
      return await this.usersRepository.findOneAndUpdate(
        { _id },
        { $set: updateUserDto },
      );
    } catch (error) {
      throw new Error(`Error updating user with id ${_id}: ${error.message}`);
    }
  }
}
