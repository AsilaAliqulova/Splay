
import { IsNumber, IsDate } from "class-validator";

export class CreateAudioTrackDto {
    @IsNumber()
    readonly langId: number;

    @IsNumber()
    readonly audioId: number;

    @IsNumber()
    readonly file_size: number;

    @IsDate()
    readonly duration: Date;
}