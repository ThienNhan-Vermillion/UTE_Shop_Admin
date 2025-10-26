import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UTEShopCategory } from '../models/category.model';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(UTEShopCategory)
    private categoryModel: typeof UTEShopCategory,
  ) {}

  async findAll(): Promise<UTEShopCategory[]> {
    return this.categoryModel.findAll({
      order: [['name', 'ASC']],
    });
  }

  async findOne(id: number): Promise<UTEShopCategory | null> {
    return this.categoryModel.findByPk(id);
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<UTEShopCategory> {
    // Auto-generate slug if not provided
    const categoryData: any = {
      name: createCategoryDto.name,
      slug: createCategoryDto.slug || this.generateSlug(createCategoryDto.name)
    };
    return this.categoryModel.create(categoryData);
  }

  private generateSlug(name: string): string {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<UTEShopCategory | null> {
    const category = await this.categoryModel.findByPk(id);
    if (!category) return null;

    await category.update(updateCategoryDto);
    return category;
  }

  async remove(id: number): Promise<boolean> {
    const category = await this.categoryModel.findByPk(id);
    if (!category) return false;

    await category.destroy();
    return true;
  }
}
