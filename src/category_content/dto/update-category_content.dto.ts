import { PartialType } from '@nestjs/swagger';
import { CreateCategoryContentDto } from './create-category_content.dto';

export class UpdateCategoryContentDto extends PartialType(CreateCategoryContentDto) {}
