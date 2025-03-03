
import { IsInt, IsBoolean, IsDate, IsString, IsNumber } from 'class-validator';

export class CreateSubscriptionDto {
  @IsInt()
  readonly id: number;

  @IsDate()
  readonly start_date: Date;

  @IsDate()
  readonly end_date: Date;

  @IsBoolean()
  readonly auto_renew: boolean;

  @IsBoolean()
  readonly is_active: boolean;

  @IsNumber()
  readonly last_amount_paid: number;

  @IsString()
  readonly subscription_source: string;

  @IsInt()
  readonly profileId: number;

  @IsInt()
  readonly planId: number;
}
