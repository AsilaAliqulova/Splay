import { IsBoolean, IsNumber, IsString } from "class-validator";
export class CreateSubscriptionPlanDto {
    @IsString()
    readonly name: string;
  
    @IsString()
    readonly description: string;
  
    @IsNumber()
    readonly monthly_price: number;
  
    @IsNumber()
    readonly max_profile: number;
  
    @IsNumber()
    readonly max_screens: number;
  
    @IsBoolean()
    readonly dowload_enabled: boolean;
  
    @IsBoolean()
    readonly ads_enabled: boolean;
  
    @IsBoolean()
    readonly is_active: boolean;
}