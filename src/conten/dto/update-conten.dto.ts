import { PartialType } from '@nestjs/swagger';
import { CreateContenDto } from './create-conten.dto';

export class UpdateContenDto extends PartialType(CreateContenDto) {}
