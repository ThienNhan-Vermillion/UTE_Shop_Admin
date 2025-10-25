import { IsInt, IsString, IsOptional, IsBoolean, Min, Max, IsNotEmpty } from 'class-validator';

export class CreateReviewDto {
  @IsInt()
  @IsNotEmpty()
  user_id: number;

  @IsInt()
  @IsNotEmpty()
  drink_id: number;

  @IsInt()
  @IsNotEmpty()
  order_id: number;

  @IsInt()
  @Min(1)
  @Max(5)
  @IsNotEmpty()
  rating: number;

  @IsString()
  @IsOptional()
  comment?: string;
}

export class UpdateReviewDto {
  @IsInt()
  @Min(1)
  @Max(5)
  @IsOptional()
  rating?: number;

  @IsString()
  @IsOptional()
  comment?: string;

  @IsBoolean()
  @IsOptional()
  is_hidden?: boolean;
}

export class ReviewResponseDto {
  id: number;
  user_id: number;
  drink_id: number;
  order_id: number;
  rating: number;
  comment?: string | null;
  is_hidden: boolean;
  created_at: Date;
  updated_at: Date;
  user?: {
    id: number;
    fullName: string;
    username: string;
  };
  drink?: {
    id: number;
    name: string;
    slug: string;
  };
  order?: {
    id: number;
    order_number: string;
    status: string;
  };
}
