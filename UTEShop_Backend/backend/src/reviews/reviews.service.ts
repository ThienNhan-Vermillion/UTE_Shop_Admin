import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UTEShopReview } from '../models/uteshop.models';
import { UTEShopUser } from '../models/uteshop.models';
import { UTEShopDrink } from '../models/uteshop.models';
import { UTEShopOrder } from '../models/uteshop.models';
import { CreateReviewDto, UpdateReviewDto, ReviewResponseDto } from './dto/review.dto';
import { Op } from 'sequelize';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(UTEShopReview)
    private reviewModel: typeof UTEShopReview,
    @InjectModel(UTEShopUser)
    private userModel: typeof UTEShopUser,
    @InjectModel(UTEShopDrink)
    private drinkModel: typeof UTEShopDrink,
    @InjectModel(UTEShopOrder)
    private orderModel: typeof UTEShopOrder,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<ReviewResponseDto> {
    // Kiểm tra xem user đã đánh giá sản phẩm này chưa
    const existingReview = await this.reviewModel.findOne({
      where: {
        user_id: createReviewDto.user_id,
        drink_id: createReviewDto.drink_id,
      },
    });

    if (existingReview) {
      throw new BadRequestException('Bạn đã đánh giá sản phẩm này rồi');
    }

    // Kiểm tra order có tồn tại và thuộc về user không
    const order = await this.orderModel.findOne({
      where: {
        id: createReviewDto.order_id,
        user_id: createReviewDto.user_id,
      },
    });

    if (!order) {
      throw new NotFoundException('Đơn hàng không tồn tại hoặc không thuộc về bạn');
    }

    // Kiểm tra drink có tồn tại không
    const drink = await this.drinkModel.findByPk(createReviewDto.drink_id);
    if (!drink) {
      throw new NotFoundException('Sản phẩm không tồn tại');
    }

    const review = await this.reviewModel.create({
      user_id: createReviewDto.user_id,
      drink_id: createReviewDto.drink_id,
      order_id: createReviewDto.order_id,
      rating: createReviewDto.rating,
      comment: createReviewDto.comment || null,
    } as any);
    return this.formatReviewResponse(review);
  }

  async findAll(page: number = 1, limit: number = 10, search?: string, is_hidden?: boolean): Promise<{
    reviews: ReviewResponseDto[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }> {
    const offset = (page - 1) * limit;
    
    const whereCondition: any = {};
    
    if (search) {
      whereCondition[Op.or] = [
        { comment: { [Op.like]: `%${search}%` } },
        { '$user.fullName$': { [Op.like]: `%${search}%` } },
        { '$drink.name$': { [Op.like]: `%${search}%` } },
      ];
    }

    if (is_hidden !== undefined) {
      whereCondition.is_hidden = is_hidden;
    }

    const { count, rows } = await this.reviewModel.findAndCountAll({
      where: whereCondition,
      include: [
        {
          model: this.userModel,
          attributes: ['id', 'fullName', 'username'],
        },
        {
          model: this.drinkModel,
          attributes: ['id', 'name', 'slug'],
        },
        {
          model: this.orderModel,
          attributes: ['id', 'order_number', 'status'],
        },
      ],
      order: [['created_at', 'DESC']],
      limit,
      offset,
    });

    const reviews = rows.map(review => this.formatReviewResponse(review));
    const totalPages = Math.ceil(count / limit);

    return {
      reviews,
      total: count,
      page,
      limit,
      totalPages,
    };
  }

  async findOne(id: number): Promise<ReviewResponseDto> {
    const review = await this.reviewModel.findByPk(id, {
      include: [
        {
          model: this.userModel,
          attributes: ['id', 'fullName', 'username'],
        },
        {
          model: this.drinkModel,
          attributes: ['id', 'name', 'slug'],
        },
        {
          model: this.orderModel,
          attributes: ['id', 'order_number', 'status'],
        },
      ],
    });

    if (!review) {
      throw new NotFoundException('Đánh giá không tồn tại');
    }

    return this.formatReviewResponse(review);
  }

  async findByDrinkId(drinkId: number, page: number = 1, limit: number = 10): Promise<{
    reviews: ReviewResponseDto[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }> {
    const offset = (page - 1) * limit;

    const { count, rows } = await this.reviewModel.findAndCountAll({
      where: {
        drink_id: drinkId,
        is_hidden: false, // Chỉ hiển thị đánh giá không bị ẩn
      },
      include: [
        {
          model: this.userModel,
          attributes: ['id', 'fullName', 'username'],
        },
        {
          model: this.drinkModel,
          attributes: ['id', 'name', 'slug'],
        },
        {
          model: this.orderModel,
          attributes: ['id', 'order_number', 'status'],
        },
      ],
      order: [['created_at', 'DESC']],
      limit,
      offset,
    });

    const reviews = rows.map(review => this.formatReviewResponse(review));
    const totalPages = Math.ceil(count / limit);

    return {
      reviews,
      total: count,
      page,
      limit,
      totalPages,
    };
  }

  async update(id: number, updateReviewDto: UpdateReviewDto): Promise<ReviewResponseDto> {
    const review = await this.reviewModel.findByPk(id);
    if (!review) {
      throw new NotFoundException('Đánh giá không tồn tại');
    }

    await review.update(updateReviewDto);
    return this.formatReviewResponse(review);
  }

  async toggleHidden(id: number): Promise<ReviewResponseDto> {
    const review = await this.reviewModel.findByPk(id);
    if (!review) {
      throw new NotFoundException('Đánh giá không tồn tại');
    }

    await review.update({ is_hidden: !review.is_hidden });
    return this.formatReviewResponse(review);
  }

  async remove(id: number): Promise<void> {
    const review = await this.reviewModel.findByPk(id);
    if (!review) {
      throw new NotFoundException('Đánh giá không tồn tại');
    }

    await review.destroy();
  }

  async getDrinkRatingStats(drinkId: number): Promise<{
    averageRating: number;
    totalReviews: number;
    ratingDistribution: { [key: number]: number };
  }> {
    const reviews = await this.reviewModel.findAll({
      where: {
        drink_id: drinkId,
        is_hidden: false,
      },
      attributes: ['rating'],
    });

    if (reviews.length === 0) {
      return {
        averageRating: 0,
        totalReviews: 0,
        ratingDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      };
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;

    const ratingDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.forEach(review => {
      ratingDistribution[review.rating]++;
    });

    return {
      averageRating: Math.round(averageRating * 10) / 10, // Làm tròn đến 1 chữ số thập phân
      totalReviews: reviews.length,
      ratingDistribution,
    };
  }

  private formatReviewResponse(review: UTEShopReview): ReviewResponseDto {
    // Đảm bảo rating trong khoảng hợp lệ (1-5)
    const validRating = Math.max(1, Math.min(5, review.rating));
    
    return {
      id: review.id,
      user_id: review.user_id,
      drink_id: review.drink_id,
      order_id: review.order_id,
      rating: validRating,
      comment: review.comment,
      is_hidden: review.is_hidden,
      created_at: review.created_at,
      updated_at: review.updated_at,
      user: review.user ? {
        id: review.user.id,
        fullName: review.user.fullName,
        username: review.user.username,
      } : undefined,
      drink: review.drink ? {
        id: review.drink.id,
        name: review.drink.name,
        slug: review.drink.slug,
      } : undefined,
      order: review.order ? {
        id: review.order.id,
        order_number: review.order.order_number,
        status: review.order.status,
      } : undefined,
    };
  }
}
