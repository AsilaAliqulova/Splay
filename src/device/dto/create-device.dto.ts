
import { IsString, IsNumber } from "class-validator";

export class CreateDeviceDto {
  @IsNumber()
  readonly userId: number;

  @IsString()
  readonly devise_type: string;

  @IsString()
  readonly device_name: string;

  @IsString()
  readonly ip_address: string;

  @IsNumber()
  readonly last_active: number;
}
