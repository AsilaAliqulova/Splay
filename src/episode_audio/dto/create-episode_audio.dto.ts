import { IsBoolean, IsNumber } from "class-validator";

export class CreateEpisodeAudioDto {
    @IsNumber()
    readonly episodetId: number;
  
    @IsNumber()
    readonly audio_trackId: number;
  
    @IsBoolean()
    readonly is_main: boolean;
  }