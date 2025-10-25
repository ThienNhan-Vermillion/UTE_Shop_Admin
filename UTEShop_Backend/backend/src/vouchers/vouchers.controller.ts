import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, ValidationPipe, UsePipes } from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { CreateVoucherDto, UpdateVoucherDto } from './dto/voucher.dto';

@Controller('vouchers')
export class VouchersController {
  constructor(private readonly vouchersService: VouchersService) {}

  @Get()
  async findAll() {
    try {
      const vouchers = await this.vouchersService.findAll();
      return {
        success: true,
        data: vouchers,
        message: 'Lấy danh sách voucher thành công'
      };
    } catch (error) {
      throw new HttpException(
        'Không thể lấy danh sách voucher',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const voucher = await this.vouchersService.findOne(+id);
      if (!voucher) {
        throw new HttpException('Không tìm thấy voucher', HttpStatus.NOT_FOUND);
      }
      return {
        success: true,
        data: voucher,
        message: 'Lấy thông tin voucher thành công'
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Không thể lấy thông tin voucher',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Post()
  async create(@Body() createVoucherDto: CreateVoucherDto) {
    try {
      const voucher = await this.vouchersService.create(createVoucherDto);
      return {
        success: true,
        data: voucher,
        message: 'Tạo voucher thành công'
      };
    } catch (error) {
      throw new HttpException(
        'Không thể tạo voucher',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateVoucherDto: UpdateVoucherDto) {
    try {
      console.log('Update voucher request:', { id, updateVoucherDto });
      
      // Validate ID
      if (isNaN(+id)) {
        throw new HttpException('ID không hợp lệ', HttpStatus.BAD_REQUEST);
      }
      
      const voucher = await this.vouchersService.update(+id, updateVoucherDto);
      if (!voucher) {
        throw new HttpException('Không tìm thấy voucher', HttpStatus.NOT_FOUND);
      }
      return {
        success: true,
        data: voucher,
        message: 'Cập nhật voucher thành công'
      };
    } catch (error) {
      console.error('Update voucher error:', error);
      if (error instanceof HttpException) {
        throw error;
      }
      if (error.name === 'ValidationError') {
        throw new HttpException('Dữ liệu không hợp lệ', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(
        `Không thể cập nhật voucher: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const result = await this.vouchersService.remove(+id);
      if (!result) {
        throw new HttpException('Không tìm thấy voucher', HttpStatus.NOT_FOUND);
      }
      return {
        success: true,
        message: 'Xóa voucher thành công'
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Không thể xóa voucher',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Patch(':id/mark-used')
  async markAsUsed(@Param('id') id: string) {
    try {
      const voucher = await this.vouchersService.markAsUsed(+id);
      if (!voucher) {
        throw new HttpException('Không tìm thấy voucher', HttpStatus.NOT_FOUND);
      }
      return {
        success: true,
        data: voucher,
        message: 'Đánh dấu voucher đã sử dụng thành công'
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Không thể đánh dấu voucher đã sử dụng',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
