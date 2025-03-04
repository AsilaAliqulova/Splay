import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SeasonService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createSeasonDto: CreateSeasonDto) {
    return this.prismaService.season.create({ data: { ...createSeasonDto } })

  }

  findAll() {
    return this.prismaService.season.findMany({ include: { series: true } })

  }

  async findOne(id: number) {
    const season = await this.prismaService.season.findUnique({ where: { id }, include: { series: true } })
    if (!season) {
      throw new NotFoundException("Season not found")
    }
    return season
  }

  async update(id: number, updateSeasonDto: UpdateSeasonDto) {
    await this.findOne(id)
    return this.prismaService.season.update({ where: { id }, data: { ...updateSeasonDto } })

  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.season.delete({ where: { id } })

  }
}
