import { IsNumber } from "class-validator";

export class CreateEpisodeDto {
    @IsNumber()
    readonly duration: number;
  
    @IsNumber()
    readonly episode_number: number;
  
    @IsNumber()
    readonly seasonId: number;
  }