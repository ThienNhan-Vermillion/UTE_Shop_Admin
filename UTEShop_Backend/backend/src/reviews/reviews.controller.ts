import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto, UpdateReviewDto } from './dto/review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }

  @Get()
  findAll(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('is_hidden') is_hidden?: string,
  ) {
    const pageNum = page ? parseInt(page, 10) : 1;
    const limitNum = limit ? parseInt(limit, 10) : 10;
    const isHidden = is_hidden === 'true' ? true : is_hidden === 'false' ? false : undefined;
    
    return this.reviewsService.findAll(pageNum, limitNum, search, isHidden);
  }

  @Get('drink/:drinkId')
  findByDrinkId(
    @Param('drinkId') drinkId: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const drinkIdNum = parseInt(drinkId, 10);
    const pageNum = page ? parseInt(page, 10) : 1;
    const limitNum = limit ? parseInt(limit, 10) : 10;
    
    return this.reviewsService.findByDrinkId(drinkIdNum, pageNum, limitNum);
  }

  @Get('drink/:drinkId/stats')
  getDrinkRatingStats(@Param('drinkId') drinkId: string) {
    const drinkIdNum = parseInt(drinkId, 10);
    return this.reviewsService.getDrinkRatingStats(drinkIdNum);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const idNum = parseInt(id, 10);
    return this.reviewsService.findOne(idNum);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    const idNum = parseInt(id, 10);
    return this.reviewsService.update(idNum, updateReviewDto);
  }

  @Patch(':id/toggle-hidden')
  @HttpCode(HttpStatus.OK)
  toggleHidden(@Param('id') id: string) {
    const idNum = parseInt(id, 10);
    return this.reviewsService.toggleHidden(idNum);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    const idNum = parseInt(id, 10);
    return this.reviewsService.remove(idNum);
  }
}
