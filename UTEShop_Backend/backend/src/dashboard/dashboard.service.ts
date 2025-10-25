import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UTEShopOrder, UTEShopUser, UTEShopActivity } from '../models/uteshop.models';
import { Op } from 'sequelize';
import { ActivityService } from '../services/activity.service';

@Injectable()
export class DashboardService {
  constructor(
    @InjectModel(UTEShopUser) private userModel: typeof UTEShopUser,
    @InjectModel(UTEShopOrder) private orderModel: typeof UTEShopOrder,
    @InjectModel(UTEShopActivity) private activityModel: typeof UTEShopActivity,
    private activityService: ActivityService,
  ) {}

  async getDashboardStats(startDate?: string, endDate?: string) {
    try {
      // Lấy tổng số người dùng từ database admin
      const totalUsers = await this.userModel.count();

      // Xác định khoảng thời gian
      let startOfPeriod: Date;
      let endOfPeriod: Date;
      
      if (startDate && endDate) {
        startOfPeriod = new Date(startDate);
        endOfPeriod = new Date(endDate);
      } else {
        // Mặc định là tháng hiện tại
        const now = new Date();
        startOfPeriod = new Date(now.getFullYear(), now.getMonth(), 1); // Ngày đầu tháng
        startOfPeriod.setHours(0, 0, 0, 0);
        endOfPeriod = new Date(now.getFullYear(), now.getMonth() + 1, 0); // Ngày cuối tháng
        endOfPeriod.setHours(23, 59, 59, 999);
      }

      // Đơn hàng trong khoảng thời gian từ UTEShop database
      const ordersInPeriod = await this.orderModel.count({
        where: {
          created_at: {
            [Op.gte]: startOfPeriod,
            [Op.lte]: endOfPeriod
          }
        }
      });

      // Doanh thu trong khoảng thời gian từ UTEShop database
      const periodRevenueResult = await this.orderModel.sum('total', {
        where: {
          created_at: {
            [Op.gte]: startOfPeriod,
            [Op.lte]: endOfPeriod
          },
          status: {
            [Op.notIn]: ['cancelled']
          }
        }
      });

      // Tổng đơn hàng từ UTEShop database
      const totalOrders = await this.orderModel.count();

      return {
        ordersInPeriod,
        periodRevenue: periodRevenueResult || 0,
        totalUsers: totalUsers,
        totalOrders: totalOrders,
        startDate: startOfPeriod,
        endDate: endOfPeriod,
      };
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      // Fallback data
      return {
        ordersInPeriod: 24,
        periodRevenue: 12500000,
        totalUsers: await this.userModel.count(),
        totalOrders: 156,
        startDate: new Date(),
        endDate: new Date(),
      };
    }
  }

  async getRecentActivities() {
    try {
      const activities = await this.activityService.getRecentActivities(10);
      
      return activities.map(activity => {
        // Xác định icon và color dựa trên type
        let icon = 'info';
        let color = 'gray';
        
        switch (activity.type) {
          case 'product_add':
            icon = 'plus';
            color = 'green';
            break;
          case 'product_update':
            icon = 'edit';
            color = 'blue';
            break;
          case 'product_delete':
            icon = 'trash';
            color = 'red';
            break;
          case 'order_status_change':
            icon = 'check';
            color = 'yellow';
            break;
          case 'order_processed':
            icon = 'check';
            color = 'yellow';
            break;
        }
        
        return {
          id: activity.id,
          type: activity.type,
          message: activity.description,
          timestamp: activity.created_at,
          icon,
          color,
        };
      });
    } catch (error) {
      console.error('Error fetching recent activities:', error);
      return [];
    }
  }

  async getTotalUsers() {
    return await this.userModel.count();
  }

  async getUsersByMonth() {
    // Thống kê người dùng theo tháng (giả lập)
    const months = [
      { month: 'Tháng 1', users: 45 },
      { month: 'Tháng 2', users: 52 },
      { month: 'Tháng 3', users: 38 },
      { month: 'Tháng 4', users: 67 },
      { month: 'Tháng 5', users: 89 },
      { month: 'Tháng 6', users: 124 },
    ];

    return months;
  }

  async deleteActivity(id: number) {
    return this.activityService.deleteActivity(id);
  }

  async deleteAllActivities() {
    return this.activityService.deleteAllActivities();
  }
}
