import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UTEShopDrink, UTEShopActivity } from '../models/uteshop.models';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ActivityService } from '../services/activity.service';

@Module({
  imports: [SequelizeModule.forFeature([UTEShopDrink, UTEShopActivity])],
  controllers: [ProductsController],
  providers: [ProductsService, ActivityService],
  exports: [ProductsService],
})
export class ProductsModule {}
