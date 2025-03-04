import { PartialType } from '@nestjs/swagger';
import { CreateSearyDto } from './create-seary.dto';

export class UpdateSearyDto extends PartialType(CreateSearyDto) {}
