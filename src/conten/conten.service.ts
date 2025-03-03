import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContenDto } from './dto/create-conten.dto';
import { UpdateContenDto } from './dto/update-conten.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContenService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }

  create(createContenDto: CreateContenDto) {
    return this.prismaService.content.create({ data: { ...createContenDto } })
  }

  findAll() {
    return this.prismaService.content.findMany({ include: { contentGenres: true } })
  }

  async findOne(id: number) {
    const content = await this.prismaService.content.findUnique({ where: { id } })
    if (!content) {
      throw new NotFoundException("Content not found")
    }
    return content
  }

  async update(id: number, updateContenDto: UpdateContenDto) {
    await this.findOne(id)
    return this.prismaService.content.update({ where: { id }, data: { ...updateContenDto } })
  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.content.delete({ where: { id } })
  }
}
