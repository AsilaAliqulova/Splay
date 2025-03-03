import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createProfileDto: CreateProfileDto) {
    return this.prismaService.profile.create({ data: { ...createProfileDto } })
  }

  findAll() {
    return this.prismaService.profile.findMany({ include: { language: true, user: true } })
  }

  async findOne(id: number) {
    const profile = await this.prismaService.profile.findUnique({ where: { id },  include: { language: true, user: true }})
    if (!profile) {
      throw new NotFoundException("profile not found")
    }
    return profile
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    await this.findOne(id)
    return this.prismaService.profile.update({ where: { id }, data: { ...updateProfileDto } })
  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.profile.delete({ where: { id } })

  }
}
