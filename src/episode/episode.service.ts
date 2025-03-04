import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EpisodeService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createEpisodeDto: CreateEpisodeDto) {
    return this.prismaService.episode.create({ data: { ...createEpisodeDto } })
  }

  findAll() {
    return this.prismaService.episode.findMany({ include: { season: true } })

  }

  async findOne(id: number) {
    const episode = await this.prismaService.episode.findUnique({ where: { id }, include: { season: true } })
    if (!episode) {
      throw new NotFoundException("Episode not found")
    }
    return episode
  }

  async update(id: number, updateEpisodeDto: UpdateEpisodeDto) {
    await this.findOne(id)
    return this.prismaService.episode.update({ where: { id }, data: { ...updateEpisodeDto } })

  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.episode.delete({ where: { id } })

  }
}
