import { Controller, Get, Put, Param, Body, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { UTEShopUser } from '../models/uteshop.models';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers() {
    const users = await this.usersService.findAll();
    return {
      success: true,
      data: users,
      message: 'Users retrieved successfully',
    };
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<Omit<UTEShopUser, 'password'>>,
  ) {
    const { password, ...safeUpdateData } = updateData as any;

    const updatedUser = await this.usersService.update(id, safeUpdateData);

    if (!updatedUser) {
      throw new HttpException(
        { success: false, message: 'User not found' },
        HttpStatus.NOT_FOUND,
      );
    }

    return {
      success: true,
      data: updatedUser,
      message: 'User updated successfully',
    };
  }
}
