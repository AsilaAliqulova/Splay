import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
    @IsInt()
    readonly id: number;

    @IsString()
    readonly name: string;

    @IsString()
    readonly description: string;

    @IsOptional()
    @IsInt()
    readonly parent_categoryId?: number;
}
