
import { IsNumber, IsBoolean } from "class-validator"
export class CreateContentAudioDto {
    @IsNumber()
    readonly contentId: number;

    @IsBoolean()
    readonly is_main: boolean;
}