import { Controller, Get, Post, Body, Param, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAllCategories() {
    try {
      const categories = await this.categoriesService.findAll();
      return {
        success: true,
        data: categories,
        message: 'Categories retrieved successfully',
      };
    } catch (error) {
      throw new HttpException(
        { success: false, message: 'Failed to retrieve categories' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      const category = await this.categoriesService.create(createCategoryDto);
      return {
        success: true,
        data: category,
        message: 'Category created successfully',
      };
    } catch (error) {
      throw new HttpException(
        { success: false, message: 'Failed to create category' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    try {
      const category = await this.categoriesService.update(id, updateCategoryDto);
      if (!category) {
        throw new HttpException(
          { success: false, message: 'Category not found' },
          HttpStatus.NOT_FOUND,
        );
      }
      return {
        success: true,
        data: category,
        message: 'Category updated successfully',
      };
    } catch (error) {
      throw new HttpException(
        { success: false, message: 'Failed to update category' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: number) {
    try {
      const result = await this.categoriesService.remove(id);
      if (!result) {
        throw new HttpException(
          { success: false, message: 'Category not found' },
          HttpStatus.NOT_FOUND,
        );
      }
      return {
        success: true,
        message: 'Category deleted successfully',
      };
    } catch (error) {
      throw new HttpException(
        { success: false, message: 'Failed to delete category' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
