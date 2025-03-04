import { Module } from '@nestjs/common';
import { ContentAudioService } from './content_audio.service';
import { ContentAudioController } from './content_audio.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [ContentAudioController],
  providers: [ContentAudioService],
})
export class ContentAudioModule {}
