import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryContentDto } from './dto/create-category_content.dto';
import { UpdateCategoryContentDto } from './dto/update-category_content.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoryContentService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createCategoryContentDto: CreateCategoryContentDto) {
    return this.prismaService.categoryContent.create({ data: { ...createCategoryContentDto } })
  }

  findAll() {
    return this.prismaService.categoryContent.findMany({ include: { content: true, category: true } })
  }

  async findOne(id: number) {
    const content = await this.prismaService.categoryContent.findUnique({ where: { id } })
    if (!content) {
      throw new NotFoundException("categryContent not found")
    }
    return content
  }

  async update(id: number, updateCategoryContentDto: UpdateCategoryContentDto) {
    await this.findOne(id)
    return this.prismaService.categoryContent.update({ where: { id }, data: { ...updateCategoryContentDto } })

  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.categoryContent.delete({ where: { id } })

  }
}
