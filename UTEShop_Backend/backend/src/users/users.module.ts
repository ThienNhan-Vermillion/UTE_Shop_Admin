import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UTEShopUser } from '../models/uteshop.models';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [SequelizeModule.forFeature([UTEShopUser])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
