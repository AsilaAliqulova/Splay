import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContentGenreDto } from './dto/create-content_genre.dto';
import { UpdateContentGenreDto } from './dto/update-content_genre.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContentGenresService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createContentGenreDto: CreateContentGenreDto) {
    return this.prismaService.contentGenres.create({data :createContentGenreDto})
  }

  findAll() {
    return this.prismaService.contentGenres.findMany({include:{content:true,genre:true}})
  }

 async findOne(id: number) {
    const content_genre = await this.prismaService.contentGenres.findUnique({ where: { id } })
        if (!content_genre) {
          throw new NotFoundException("Content genres not found")
        }
        return content_genre
  }

 async update(id: number, updateContentGenreDto: UpdateContentGenreDto) {
    await this.findOne(id)
    return this.prismaService.contentGenres.update({ where: { id }, data: { ...updateContentGenreDto } })
  }

 async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.contentGenres.delete({ where: { id } })
  }
}
