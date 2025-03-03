import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGenreImageDto } from './dto/create-genre_image.dto';
import { UpdateGenreImageDto } from './dto/update-genre_image.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GenreImageService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createGenreImageDto: CreateGenreImageDto) {
    return this.prismaService.genreImage.create({ data: createGenreImageDto })
  }

  findAll() {
    return this.prismaService.genreImage.findMany({ include: { genre: true } })
  }


  async findOne(id: number) {
    const genre_image = await this.prismaService.genreImage.findUnique({ where: { id } })
    if (!genre_image) {
      throw new NotFoundException("genre_image not found")
    }
    return genre_image
  }

  async update(id: number, updateGenreImageDto: UpdateGenreImageDto) {
    await this.findOne(id)
    return this.prismaService.genreImage.update({ where: { id }, data: { ...updateGenreImageDto } })
  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.genreImage.delete({ where: { id } })
  }
}
