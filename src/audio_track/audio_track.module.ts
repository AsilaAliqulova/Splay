import { Module } from '@nestjs/common';
import { AudioTrackService } from './audio_track.service';
import { AudioTrackController } from './audio_track.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [AudioTrackController],
  providers: [AudioTrackService],
})
export class AudioTrackModule {}
