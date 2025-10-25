import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { UTEShopReview, UTEShopUser, UTEShopDrink, UTEShopOrder } from '../models/uteshop.models';

@Module({
  imports: [
    SequelizeModule.forFeature([UTEShopReview, UTEShopUser, UTEShopDrink, UTEShopOrder]),
  ],
  controllers: [ReviewsController],
  providers: [ReviewsService],
  exports: [ReviewsService],
})
export class ReviewsModule {}
