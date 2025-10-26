import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { UTEShopCategory } from '../models/category.model';

@Module({
  imports: [SequelizeModule.forFeature([UTEShopCategory])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
