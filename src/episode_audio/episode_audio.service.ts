import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEpisodeAudioDto } from './dto/create-episode_audio.dto';
import { UpdateEpisodeAudioDto } from './dto/update-episode_audio.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EpisodeAudioService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createEpisodeAudioDto: CreateEpisodeAudioDto) {
    return this.prismaService.episodeAudio.create({ data: { ...createEpisodeAudioDto } })

  }

  findAll() {
    return this.prismaService.episodeAudio.findMany({ include: { episodet: true, audio_track: true } })

  }

  async findOne(id: number) {
    const episodeAudio = await this.prismaService.episodeAudio.findUnique({ where: { id }, include: { episodet: true, audio_track: true } })
    if (!episodeAudio) {
      throw new NotFoundException("EpisodeAudio not found")
    }
    return episodeAudio
  }

  async update(id: number, updateEpisodeAudioDto: UpdateEpisodeAudioDto) {
    await this.findOne(id)
    return this.prismaService.episodeAudio.update({ where: { id }, data: { ...updateEpisodeAudioDto } })

  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.episodeAudio.delete({ where: { id } })

  }
}
