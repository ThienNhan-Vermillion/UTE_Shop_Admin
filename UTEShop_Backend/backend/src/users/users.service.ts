import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UTEShopUser } from '../models/uteshop.models';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UTEShopUser)
    private userModel: typeof UTEShopUser,
  ) {}

  async findAll(): Promise<Partial<UTEShopUser>[]> {
    return this.userModel.findAll({
      where: { role: 'user' },
      attributes: { exclude: ['password'] },
    });
  }

  async findOne(id: number): Promise<Partial<UTEShopUser> | null> {
    return this.userModel.findByPk(id, {
      attributes: { exclude: ['password'] },
    });
  }

  async update(
    id: number,
    updateData: Partial<Omit<UTEShopUser, 'password'>>
  ): Promise<Partial<UTEShopUser> | null> {
    const user = await this.userModel.findByPk(id);
    if (!user) return null;
  
    await user.update(updateData);
    return user; 
  }
  
}
