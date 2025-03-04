import { IsString, IsNumber, IsBoolean } from "class-validator";

export class CreateWatchHistoryDto {
  @IsNumber()
  readonly profileId: number;

  @IsNumber()
  readonly contentId: number;

  @IsNumber()
  readonly episodeId: number;

  @IsNumber()
  readonly waatched_secunds: number;

  @IsNumber()
  readonly last_watched: number;

  @IsBoolean()
  readonly is_completed: boolean;

  @IsString()
  readonly content_type: string;
}
