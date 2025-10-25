import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UTEShopOrder, UTEShopUser } from '../models/uteshop.models';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

@Module({
  imports: [SequelizeModule.forFeature([UTEShopOrder, UTEShopUser])],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
