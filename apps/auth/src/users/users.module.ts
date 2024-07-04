import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/common';
import { UserDocument, UserSchema } from './schemas/user.schema';
import { UsersRepository } from './users.repository';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: UserDocument.name, schema: UserSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService]
})
export class UsersModule {}
