import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GenreService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createGenreDto: CreateGenreDto) {
    return this.prismaService.genre.create({
      data: createGenreDto
    })

  }

  findAll() {
    return this.prismaService.genre.findMany({ include: { contentGenres: true,genreImage:true } })
  }

  async findOne(id: number) {
    const genre = await this.prismaService.genre.findUnique({ where: { id } ,include:{contentGenres: true,genreImage:true}})
    if (!genre) {
      throw new NotFoundException("genre not found")
    }
    return genre
  }

  async update(id: number, updateGenreDto: UpdateGenreDto) {
    await this.findOne(id)
    return this.prismaService.genre.update({ where: { id }, data: { ...updateGenreDto } })

  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.genre.delete({ where: { id } })
  }
}
