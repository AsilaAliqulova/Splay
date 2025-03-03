import { Module } from '@nestjs/common';
import { CategoryContentService } from './category_content.service';
import { CategoryContentController } from './category_content.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [CategoryContentController],
  providers: [CategoryContentService],
})
export class CategoryContentModule {}
