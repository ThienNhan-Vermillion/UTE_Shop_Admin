import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { UTEShopOrder, UTEShopUser, UTEShopOrderItem, UTEShopDrink, UTEShopActivity } from '../models/uteshop.models';
import { ActivityService } from '../services/activity.service';

@Module({
  imports: [
    SequelizeModule.forFeature([UTEShopOrder, UTEShopUser, UTEShopOrderItem, UTEShopDrink, UTEShopActivity]),
  ],
  providers: [OrdersService, ActivityService],
  controllers: [OrdersController],
})
export class OrdersModule {}
