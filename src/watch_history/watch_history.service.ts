import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWatchHistoryDto } from './dto/create-watch_history.dto';
import { UpdateWatchHistoryDto } from './dto/update-watch_history.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WatchHistoryService {
  constructor(
      private readonly prismaService: PrismaService
    ) { }
  create(createWatchHistoryDto: CreateWatchHistoryDto) {
    return this.prismaService.watchHistory.create({ data: { ...createWatchHistoryDto } })

  }

  findAll() {
    return this.prismaService.watchHistory.findMany({ include: { profile: true ,content:true} })

  }

 async findOne(id: number) {
    const watchHistory = await this.prismaService.watchHistory.findUnique({ where: { id },include: { profile: true ,content:true} })
       if (!watchHistory) {
         throw new NotFoundException("WatchHistory not found")
       }
       return watchHistory
  }

 async update(id: number, updateWatchHistoryDto: UpdateWatchHistoryDto) {
    await this.findOne(id)
    return this.prismaService.watchHistory.update({ where: { id }, data: { ...updateWatchHistoryDto } })
 
  }

 async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.watchHistory.delete({ where: { id } })
 
  }
}
