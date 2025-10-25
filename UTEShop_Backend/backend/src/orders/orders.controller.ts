import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ActivityService } from '../services/activity.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly activityService: ActivityService,
  ) {}

  @Get()
  async getAllOrders(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    @Query('status') status?: string,
    @Query('search') search?: string,
    @Query('dateFrom') dateFrom?: string,
    @Query('dateTo') dateTo?: string,
  ) {
    return this.ordersService.getAllOrders(
      parseInt(page),
      parseInt(limit),
      status,
      search,
      dateFrom,
      dateTo,
    );
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    return this.ordersService.getOrderById(id);
  }

  @Put(':id/status')
  async updateOrderStatus(
    @Param('id') id: string,
    @Body('status') status: string,
  ) {
    const result = await this.ordersService.updateOrderStatus(id, status);
    
    // Log activity
    await this.activityService.logActivity(
      'order_status_change',
      `Cập nhật trạng thái đơn hàng #${id} thành: ${status}`
    );
    
    return result;
  }

}
