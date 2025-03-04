import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContentAudioDto } from './dto/create-content_audio.dto';
import { UpdateContentAudioDto } from './dto/update-content_audio.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContentAudioService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createContentAudioDto: CreateContentAudioDto) {
    return this.prismaService.contentAudio.create({ data: { ...createContentAudioDto } })

  }

  findAll() {
    return this.prismaService.contentAudio.findMany({ include: { content: true } })

  }

  async findOne(id: number) {
    const contentAudio = await this.prismaService.contentAudio.findUnique({ where: { id } })
    if (!contentAudio) {
      throw new NotFoundException("contentAudio not found")
    }
    return contentAudio
  }

  async update(id: number, updateContentAudioDto: UpdateContentAudioDto) {
    await this.findOne(id)
    return this.prismaService.contentAudio.update({ where: { id }, data: { ...updateContentAudioDto } })

  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.contentAudio.delete({ where: { id } })
  }
}
