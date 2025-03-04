import { IsString, IsNumber, IsDate } from "class-validator";

export class CreateRatingDto {
  @IsNumber()
  readonly profileId: number;

  @IsNumber()
  readonly contentId: number;

  @IsNumber()
  readonly rating_value: number;

  @IsDate()
  readonly ratedAt: Date;
}