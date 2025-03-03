import { PartialType } from '@nestjs/swagger';
import { CreateGenreImageDto } from './create-genre_image.dto';

export class UpdateGenreImageDto extends PartialType(CreateGenreImageDto) {}
