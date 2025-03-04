import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DeviceService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createDeviceDto: CreateDeviceDto) {
    return this.prismaService.devices.create({ data: { ...createDeviceDto } })

  }

  findAll() {
    return this.prismaService.devices.findMany({ include: { user: true } })

  }

  async findOne(id: number) {
    const devices = await this.prismaService.devices.findUnique({ where: { id } })
    if (!devices) {
      throw new NotFoundException("Devices not found")
    }
    return devices
  }

  async update(id: number, updateDeviceDto: UpdateDeviceDto) {
    await this.findOne(id)
    return this.prismaService.devices.update({ where: { id }, data: { ...updateDeviceDto } })

  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.devices.delete({ where: { id } })

  }
}
