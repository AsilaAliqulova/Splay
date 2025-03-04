import { PartialType } from '@nestjs/swagger';
import { CreateAudioTrackDto } from './create-audio_track.dto';

export class UpdateAudioTrackDto extends PartialType(CreateAudioTrackDto) {}
