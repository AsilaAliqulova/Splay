
import { IsString, IsNumber } from "class-validator";

export class CreateSearchHistoryDto {
  @IsNumber()
  readonly profileId: number;

  @IsString()
  readonly search_query: string;
}
