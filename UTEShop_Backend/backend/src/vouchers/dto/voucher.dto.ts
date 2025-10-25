import { IsString, IsNumber, IsEnum, IsOptional, IsDateString, Min } from 'class-validator';

export class CreateVoucherDto {
  @IsString()
  code: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(['percentage', 'fixed'])
  discount_type: 'percentage' | 'fixed';

  @IsNumber()
  @Min(0)
  discount_value: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  min_order_amount?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  max_discount_amount?: number;

  @IsOptional()
  @IsNumber()
  usage_limit?: number;

  @IsOptional()
  @IsNumber()
  used_count?: number;

  @IsOptional()
  @IsDateString()
  start_date?: string;

  @IsOptional()
  @IsDateString()
  end_date?: string;

  @IsOptional()
  @IsEnum(['active', 'inactive', 'expired'])
  status?: 'active' | 'inactive' | 'expired';
}

export class UpdateVoucherDto {
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(['percentage', 'fixed'])
  discount_type?: 'percentage' | 'fixed';

  @IsOptional()
  @IsNumber()
  @Min(0)
  discount_value?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  min_order_amount?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  max_discount_amount?: number;

  @IsOptional()
  @IsNumber()
  usage_limit?: number;

  @IsOptional()
  @IsNumber()
  used_count?: number;

  @IsOptional()
  @IsDateString()
  start_date?: string;

  @IsOptional()
  @IsDateString()
  end_date?: string;

  @IsOptional()
  @IsEnum(['active', 'inactive', 'expired'])
  status?: 'active' | 'inactive' | 'expired';
}
