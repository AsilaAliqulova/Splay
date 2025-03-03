import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createCategoryDto: CreateCategoryDto) {
    return this.prismaService.category.create({ data: { ...createCategoryDto } })
  }

  findAll() {
    return this.prismaService.category.findMany({ include: { parentCategory: true } })
  }

  async findOne(id: number) {
    const category = await this.prismaService.category.findUnique({ where: { id } })
        if (!category) {
          throw new NotFoundException("Category not found")
        }
        return category
  }

async  update(id: number, updateCategoryDto: UpdateCategoryDto) {
  await this.findOne(id)
  return this.prismaService.category.update({ where: { id }, data: { ...updateCategoryDto } })

  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.category.delete({ where: { id } })
  }
}
