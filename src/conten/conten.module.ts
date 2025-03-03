import { Module } from '@nestjs/common';
import { ContenService } from './conten.service';
import { ContenController } from './conten.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports :[PrismaModule],
  controllers: [ContenController],
  providers: [ContenService],
})
export class ContenModule {}
