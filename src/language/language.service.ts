import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LanguageService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createLanguageDto: CreateLanguageDto) {
    return this.prismaService.language.create({ data: { ...createLanguageDto } })
  }

  findAll() {
    return this.prismaService.language.findMany()
  }

  async findOne(id: number) {
    const language = await this.prismaService.language.findUnique({ where: { id } })
    if (!language) {
      throw new NotFoundException("language not found")
    }
    return language
  }

 async update(id: number, updateLanguageDto: UpdateLanguageDto) {
    await this.findOne(id)
    return this.prismaService.language.update({ where: { id }, data: { ...updateLanguageDto } })
 
  }

 async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.language.delete({ where: { id } })
  }
}
