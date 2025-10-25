import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UTEShopUser } from '../models/uteshop.models';

@Module({
  imports: [SequelizeModule.forFeature([UTEShopUser])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
