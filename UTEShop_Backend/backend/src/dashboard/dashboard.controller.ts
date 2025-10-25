import { Controller, Get, Query, Delete, Param } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('stats')
  async getStats(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.dashboardService.getDashboardStats(startDate, endDate);
  }

  @Get('activities')
  async getActivities() {
    return this.dashboardService.getRecentActivities();
  }

  @Get('users')
  async getTotalUsers() {
    const totalUsers = await this.dashboardService.getTotalUsers();
    return { totalUsers };
  }

  @Get('users-by-month')
  async getUsersByMonth() {
    return this.dashboardService.getUsersByMonth();
  }

  @Delete('activities/:id')
  async deleteActivity(@Param('id') id: string) {
    const success = await this.dashboardService.deleteActivity(+id);
    return {
      success,
      message: success ? 'Hoạt động đã được xóa' : 'Không thể xóa hoạt động'
    };
  }

  @Delete('activities')
  async deleteAllActivities() {
    const success = await this.dashboardService.deleteAllActivities();
    return {
      success,
      message: success ? 'Tất cả hoạt động đã được xóa' : 'Không thể xóa hoạt động'
    };
  }
}
