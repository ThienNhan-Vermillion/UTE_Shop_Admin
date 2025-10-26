import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException, UseInterceptors, UploadedFiles, Query } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { UploadMiddleware } from '../middleware/upload.middleware';
import { ActivityService } from '../services/activity.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly activityService: ActivityService,
  ) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images', 3))
  async create(@Body() createProductDto: CreateProductDto, @UploadedFiles() files: Express.Multer.File[]) {
    try {
      console.log('=== CREATE PRODUCT DEBUG ===');
      console.log('Files received:', files?.length || 0);
      console.log('Files details:', files?.map(f => ({ filename: f.filename, originalname: f.originalname, size: f.size })));
      
      // Xử lý upload files
      let imageUrls: string[] = [];
      if (files && files.length > 0) {
        const baseUrl = process.env.API_BASE_URL || 'http://localhost:3001';
        console.log('Base URL:', baseUrl);
        
        imageUrls = files.map(file => {
          const url = `${baseUrl}/uploads/${file.filename}`;
          console.log('Generated URL:', url);
          return url;
        });
      }

      // Nếu có image_url từ form (URL input), thêm vào danh sách
      if (createProductDto.image_url) {
        console.log('URL from form:', createProductDto.image_url);
        imageUrls.unshift(createProductDto.image_url);
      }

      console.log('Final image URLs:', imageUrls);

      // Cập nhật DTO với danh sách hình ảnh
      const productData = {
        ...createProductDto,
        image_url: imageUrls.join(','), // Lưu tất cả ảnh dưới dạng string phân cách bởi dấu phẩy
      };

      console.log('Product data to save:', productData);

      const product = await this.productsService.create(productData);
      console.log('Product created:', product);
      
      // Log activity
      await this.activityService.logActivity(
        'product_add',
        `Thêm sản phẩm mới: ${productData.name}`
      );
      
      return {
        success: true,
        message: 'Sản phẩm đã được thêm thành công',
        data: product,
      };
    } catch (error) {
      console.error('Error creating product:', error);
      throw new HttpException(
        {
          success: false,
          message: 'Lỗi khi thêm sản phẩm',
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    try {
      const result = await this.productsService.findAll(page, limit);
      return {
        success: true,
        data: result.products,
        total: result.total,
        page: result.page,
        limit: result.limit,
        totalPages: result.totalPages,
      };
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: 'Lỗi khi lấy danh sách sản phẩm',
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('customer')
  async findAllForCustomer() {
    try {
      const products = await this.productsService.findAllForCustomer();
      return {
        success: true,
        data: products,
      };
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: 'Lỗi khi lấy danh sách sản phẩm cho khách hàng',
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const product = await this.productsService.findOne(+id);
      if (!product) {
        throw new HttpException(
          {
            success: false,
            message: 'Không tìm thấy sản phẩm',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      return {
        success: true,
        data: product,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          success: false,
          message: 'Lỗi khi lấy thông tin sản phẩm',
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  @UseInterceptors(FilesInterceptor('images', 3))
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto, @UploadedFiles() files: Express.Multer.File[]) {
    try {
      // Xử lý upload files nếu có
      let imageUrls: string[] = [];
      if (files && files.length > 0) {
        const baseUrl = process.env.API_BASE_URL || 'http://localhost:3001';
        imageUrls = files.map(file => `${baseUrl}/uploads/${file.filename}`);
      }

      // Nếu có image_url từ form (URL input), thêm vào danh sách
      if (updateProductDto.image_url) {
        imageUrls.unshift(updateProductDto.image_url);
      }

      // Cập nhật DTO với danh sách hình ảnh
      const productData = {
        ...updateProductDto,
        image_url: imageUrls.length > 0 ? imageUrls.join(',') : updateProductDto.image_url,
      };

      const updated = await this.productsService.update(+id, productData);
      if (!updated) {
        throw new HttpException(
          {
            success: false,
            message: 'Không tìm thấy sản phẩm để cập nhật',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      
      // Log activity
      await this.activityService.logActivity(
        'product_update',
        `Cập nhật sản phẩm: ${productData.name || 'ID ' + id}`
      );
      
      return {
        success: true,
        message: 'Sản phẩm đã được cập nhật thành công',
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          success: false,
          message: 'Lỗi khi cập nhật sản phẩm',
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Patch(':id/hide')
  async hide(@Param('id') id: string) {
    try {
      const hidden = await this.productsService.hide(+id);
      if (!hidden) {
        throw new HttpException(
          {
            success: false,
            message: 'Không tìm thấy sản phẩm để ẩn',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      return {
        success: true,
        message: 'Sản phẩm đã được ẩn thành công',
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          success: false,
          message: 'Lỗi khi ẩn sản phẩm',
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id/show')
  async show(@Param('id') id: string) {
    try {
      const shown = await this.productsService.show(+id);
      if (!shown) {
        throw new HttpException(
          {
            success: false,
            message: 'Không tìm thấy sản phẩm để hiển thị',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      return {
        success: true,
        message: 'Sản phẩm đã được hiển thị thành công',
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          success: false,
          message: 'Lỗi khi hiển thị sản phẩm',
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

}
