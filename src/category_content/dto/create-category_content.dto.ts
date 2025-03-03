
import { IsInt } from 'class-validator';

export class CreateCategoryContentDto {

    @IsInt()
    readonly categoryId: number;

    @IsInt()
    readonly contentId: number;
}
