import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UTEShopUser } from '../models/uteshop.models';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UTEShopUser)
    private userModel: typeof UTEShopUser,
  ) {}

  async findAll(): Promise<UTEShopUser[]> {
    return this.userModel.findAll();
  }
}
