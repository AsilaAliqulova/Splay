import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAudioTrackDto } from './dto/create-audio_track.dto';
import { UpdateAudioTrackDto } from './dto/update-audio_track.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AudioTrackService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createAudioTrackDto: CreateAudioTrackDto) {
    return this.prismaService.audioTrack.create({ data: { ...createAudioTrackDto } })

  }

  findAll() {
    return this.prismaService.audioTrack.findMany({ include: { lang: true, audio: true } })

  }

  async findOne(id: number) {
    const audioTrack = await this.prismaService.audioTrack.findUnique({ where: { id }, include: { lang: true, audio: true } })
    if (!audioTrack) {
      throw new NotFoundException("AudioTrack not found")
    }
    return audioTrack
  }

  async update(id: number, updateAudioTrackDto: UpdateAudioTrackDto) {
    await this.findOne(id)
    return this.prismaService.audioTrack.update({ where: { id }, data: { ...updateAudioTrackDto } })

  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.audioTrack.delete({ where: { id } })

  }
}
