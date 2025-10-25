import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { VouchersService } from './vouchers.service';
import { VouchersController } from './vouchers.controller';
import { UTEShopVoucher, UTEShopUser } from '../models/uteshop.models';

@Module({
  imports: [SequelizeModule.forFeature([UTEShopVoucher, UTEShopUser])],
  controllers: [VouchersController],
  providers: [VouchersService],
  exports: [VouchersService],
})
export class VouchersModule {}
