import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UTEShopVoucher } from '../models/uteshop.models';
import { CreateVoucherDto, UpdateVoucherDto } from './dto/voucher.dto';

@Injectable()
export class VouchersService {
  constructor(
    @InjectModel(UTEShopVoucher)
    private voucherModel: typeof UTEShopVoucher,
  ) {}

  async findAll(): Promise<UTEShopVoucher[]> {
    return this.voucherModel.findAll({
      order: [['created_at', 'DESC']],
    });
  }

  async findOne(id: number): Promise<UTEShopVoucher | null> {
    return this.voucherModel.findByPk(id);
  }

  async create(createVoucherDto: CreateVoucherDto): Promise<UTEShopVoucher> {
    return this.voucherModel.create(createVoucherDto as any);
  }

  async update(
    id: number,
    updateVoucherDto: UpdateVoucherDto
  ): Promise<UTEShopVoucher | null> {
    const voucher = await this.voucherModel.findByPk(id);
    if (!voucher) return null;

    // Xử lý dữ liệu trước khi update
    const updateData: any = {};
    
    if (updateVoucherDto.code !== undefined) updateData.code = updateVoucherDto.code;
    if (updateVoucherDto.name !== undefined) updateData.name = updateVoucherDto.name;
    if (updateVoucherDto.description !== undefined) updateData.description = updateVoucherDto.description;
    if (updateVoucherDto.discount_type !== undefined) updateData.discount_type = updateVoucherDto.discount_type;
    if (updateVoucherDto.discount_value !== undefined) updateData.discount_value = updateVoucherDto.discount_value;
    if (updateVoucherDto.min_order_amount !== undefined) updateData.min_order_amount = updateVoucherDto.min_order_amount;
    if (updateVoucherDto.max_discount_amount !== undefined) updateData.max_discount_amount = updateVoucherDto.max_discount_amount;
    if (updateVoucherDto.usage_limit !== undefined) updateData.usage_limit = updateVoucherDto.usage_limit;
    if (updateVoucherDto.used_count !== undefined) updateData.used_count = updateVoucherDto.used_count;
    if (updateVoucherDto.start_date !== undefined) {
      updateData.start_date = updateVoucherDto.start_date ? new Date(updateVoucherDto.start_date) : null;
    }
    if (updateVoucherDto.end_date !== undefined) {
      updateData.end_date = updateVoucherDto.end_date ? new Date(updateVoucherDto.end_date) : null;
    }
    if (updateVoucherDto.status !== undefined) updateData.status = updateVoucherDto.status;

    console.log('Updating voucher with data:', updateData);
    await voucher.update(updateData);

    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const voucher = await this.voucherModel.findByPk(id);
    if (!voucher) return false;

    await voucher.destroy();
    return true;
  }

  async markAsUsed(id: number): Promise<UTEShopVoucher | null> {
    const voucher = await this.voucherModel.findByPk(id);
    if (!voucher) return null;

    await voucher.update({
      used_count: (voucher.used_count || 0) + 1,
    });

    return this.findOne(id);
  }
}
