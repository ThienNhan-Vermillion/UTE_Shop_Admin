import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UTEShopVoucher, UTEShopUser } from '../models/uteshop.models';
import { CreateVoucherDto, UpdateVoucherDto } from './dto/voucher.dto';

@Injectable()
export class VouchersService {
  constructor(
    @InjectModel(UTEShopVoucher)
    private voucherModel: typeof UTEShopVoucher,
    @InjectModel(UTEShopUser)
    private userModel: typeof UTEShopUser,
  ) {}

  async findAll(): Promise<UTEShopVoucher[]> {
    return this.voucherModel.findAll({
      include: [
        {
          model: UTEShopUser,
          as: 'user',
          attributes: ['id', 'fullName', 'email'],
        },
      ],
      order: [['created_at', 'DESC']],
    });
  }

  async findOne(id: number): Promise<UTEShopVoucher | null> {
    return this.voucherModel.findByPk(id, {
      include: [
        {
          model: UTEShopUser,
          as: 'user',
          attributes: ['id', 'fullName', 'email'],
        },
      ],
    });
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
    if (updateVoucherDto.description !== undefined) updateData.description = updateVoucherDto.description;
    if (updateVoucherDto.discount_type !== undefined) updateData.discount_type = updateVoucherDto.discount_type;
    if (updateVoucherDto.discount_value !== undefined) updateData.discount_value = updateVoucherDto.discount_value;
    if (updateVoucherDto.min_order_total !== undefined) updateData.min_order_total = updateVoucherDto.min_order_total;
    if (updateVoucherDto.expires_at !== undefined) {
      updateData.expires_at = updateVoucherDto.expires_at ? new Date(updateVoucherDto.expires_at) : null;
    }
    if (updateVoucherDto.used_at !== undefined) {
      updateData.used_at = updateVoucherDto.used_at ? new Date(updateVoucherDto.used_at) : null;
    }

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
      used_at: new Date(),
    });

    return this.findOne(id);
  }
}
