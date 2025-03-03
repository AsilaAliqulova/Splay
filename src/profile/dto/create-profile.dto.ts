
import { IsInt, IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsInt()
  readonly userId: number;

  @IsString()
  readonly avatar: string;

  @IsInt()
  readonly languageId: number;

  @IsInt()
  readonly age: number;

  @IsBoolean()
  readonly is_active: boolean;

  @IsString()
  readonly password: string;

  @IsDate()
  readonly createAt: Date;

  @IsBoolean()
  readonly is_main: boolean;
}

