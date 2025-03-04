import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSearchHistoryDto } from './dto/create-search_history.dto';
import { UpdateSearchHistoryDto } from './dto/update-search_history.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SearchHistoryService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createSearchHistoryDto: CreateSearchHistoryDto) {
    return this.prismaService.searchHistory.create({ data: { ...createSearchHistoryDto } })

  }

  findAll() {
    return this.prismaService.searchHistory.findMany({ include: { profile: true } })

  }

  async findOne(id: number) {
    const searchHistory = await this.prismaService.searchHistory.findUnique({ where: { id }, include: { profile: true } })
    if (!searchHistory) {
      throw new NotFoundException("SearchHistory not found")
    }
    return searchHistory
  }

async  update(id: number, updateSearchHistoryDto: UpdateSearchHistoryDto) {
    await this.findOne(id)
    return this.prismaService.searchHistory.update({ where: { id }, data: { ...updateSearchHistoryDto } })
 
  }

 async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.searchHistory.delete({ where: { id } })
  
  }
}
