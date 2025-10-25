import { IsString, IsNumber, IsEnum, IsOptional, IsDateString, Min } from 'class-validator';

export class CreateVoucherDto {
  @IsNumber()
  user_id: number;

  @IsString()
  code: string;

  @IsEnum(['percent', 'fixed'])
  discount_type: 'percent' | 'fixed';

  @IsNumber()
  @Min(0)
  discount_value: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  min_order_total?: number;

  @IsOptional()
  @IsDateString()
  expires_at?: string;

  @IsOptional()
  @IsDateString()
  used_at?: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class UpdateVoucherDto {
  @IsOptional()
  @IsNumber()
  user_id?: number;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsEnum(['percent', 'fixed'])
  discount_type?: 'percent' | 'fixed';

  @IsOptional()
  @IsNumber()
  @Min(0)
  discount_value?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  min_order_total?: number;

  @IsOptional()
  expires_at?: string | null;

  @IsOptional()
  @IsDateString()
  used_at?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
