import { Module } from '@nestjs/common';
import { GenreImageService } from './genre_image.service';
import { GenreImageController } from './genre_image.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [GenreImageController],
  providers: [GenreImageService],
})
export class GenreImageModule {}
