import { IsInt, IsOptional, IsPositive, IsString, IsDate, IsNumber } from 'class-validator';

export class CreateBillingHistoryDto {
  @IsInt()
  readonly id: number;

  @IsInt()
  readonly userId: number;

  @IsNumber({ maxDecimalPlaces: 2 })  
  @IsPositive()
  readonly amount: number;

  @IsDate()
  readonly date: Date;


  @IsString()
  readonly status: string;

  @IsInt()
  readonly subscriptionId: number;

  @IsInt()
  readonly payment_methodId: number;

  @IsOptional()
  @IsInt()
  readonly contentId?: number;

  @IsOptional()
  @IsInt()
  readonly categoryId?: number;
}
