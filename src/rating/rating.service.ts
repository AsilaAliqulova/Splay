import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RatingService {
   constructor(
      private readonly prismaService: PrismaService
    ) { }
  
  create(createRatingDto: CreateRatingDto) {
    return this.prismaService.rating.create({ data: { ...createRatingDto } })

  }

  findAll() {
    return this.prismaService.rating.findMany({ include: { profile: true,content:true } })

  }

 async findOne(id: number) {
    const rating = await this.prismaService.rating.findUnique({ where: { id } })
        if (!rating) {
          throw new NotFoundException("Rating not found")
        }
        return rating
  }

 async update(id: number, updateRatingDto: UpdateRatingDto) {
    await this.findOne(id)
    return this.prismaService.rating.update({ where: { id }, data: { ...updateRatingDto } })
 
  }

 async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.rating.delete({ where: { id } })
  }
}
