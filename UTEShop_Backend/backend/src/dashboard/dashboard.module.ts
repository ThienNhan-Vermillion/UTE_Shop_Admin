import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UTEShopOrder, UTEShopUser, UTEShopActivity } from '../models/uteshop.models';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { ActivityService } from '../services/activity.service';

@Module({
  imports: [SequelizeModule.forFeature([UTEShopOrder, UTEShopUser, UTEShopActivity])],

  controllers: [DashboardController],
  providers: [DashboardService, ActivityService],
})
export class DashboardModule {}
