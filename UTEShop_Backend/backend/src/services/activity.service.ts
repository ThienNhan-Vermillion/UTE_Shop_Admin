import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UTEShopActivity } from '../models/uteshop.models';

@Injectable()
export class ActivityService {
  constructor(
    @InjectModel(UTEShopActivity)
    private activityModel: typeof UTEShopActivity,
  ) {}

  async logActivity(type: string, description: string) {
    try {
      await this.activityModel.create({
        type,
        description,
        created_at: new Date(),
      } as any);
      console.log(`Activity logged: ${type} - ${description}`);
    } catch (error) {
      console.error('Error logging activity:', error);
    }
  }

  async getRecentActivities(limit: number = 10) {
    return this.activityModel.findAll({
      order: [['created_at', 'DESC']],
      limit,
    });
  }

  async deleteActivity(id: number) {
    try {
      const result = await this.activityModel.destroy({
        where: { id }
      });
      console.log(`Activity deleted: ${id}, affected rows: ${result}`);
      return result > 0;
    } catch (error) {
      console.error('Error deleting activity:', error);
      return false;
    }
  }

  async deleteAllActivities() {
    try {
      const result = await this.activityModel.destroy({
        where: {},
        truncate: true
      });
      console.log(`All activities deleted, affected rows: ${result}`);
      return true;
    } catch (error) {
      console.error('Error deleting all activities:', error);
      return false;
    }
  }
}
