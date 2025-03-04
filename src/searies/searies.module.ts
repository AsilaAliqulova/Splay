import { Module } from '@nestjs/common';
import { SeariesService } from './searies.service';
import { SeariesController } from './searies.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [SeariesController],
  providers: [SeariesService],
})
export class SeariesModule {}
