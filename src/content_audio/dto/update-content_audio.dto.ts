import { PartialType } from '@nestjs/swagger';
import { CreateContentAudioDto } from './create-content_audio.dto';

export class UpdateContentAudioDto extends PartialType(CreateContentAudioDto) {}
