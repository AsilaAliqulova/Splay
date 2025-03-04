import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSearyDto } from './dto/create-seary.dto';
import { UpdateSearyDto } from './dto/update-seary.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SeariesService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }

  create(createSearyDto: CreateSearyDto) {
    return this.prismaService.searies.create({ data: { ...createSearyDto } })

  }

  findAll() {
    return this.prismaService.searies.findMany({ include: { content: true } })

  }

  async findOne(id: number) {
    const searies = await this.prismaService.searies.findUnique({ where: { id }, include: { content: true } })
    if (!searies) {
      throw new NotFoundException("Searies not found")
    }
    return searies
  }

  async update(id: number, updateSearyDto: UpdateSearyDto) {
    await this.findOne(id)
    return this.prismaService.searies.update({ where: { id }, data: { ...updateSearyDto } })

  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.searies.delete({ where: { id } })

  }
}
