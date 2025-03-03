import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBillingHistoryDto } from './dto/create-billing_history.dto';
import { UpdateBillingHistoryDto } from './dto/update-billing_history.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BillingHistoryService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createBillingHistoryDto: CreateBillingHistoryDto) {
    return this.prismaService.billingHistory.create({ data: { ...createBillingHistoryDto } })
  }

  findAll() {
    return this.prismaService.billingHistory.findMany({ include: { user: true, subscription: true, payment_method: true } })
  }

  async findOne(id: number) {
    const billing_history = await this.prismaService.billingHistory.findUnique({ where: { id } })
    if (!billing_history) {
      throw new NotFoundException("billing_history not found")
    }
    return billing_history
  }

  async update(id: number, updateBillingHistoryDto: UpdateBillingHistoryDto) {
    await this.findOne(id)
    return this.prismaService.billingHistory.update({ where: { id }, data: { ...updateBillingHistoryDto } })

  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.billingHistory.delete({ where: { id } })

  }
}
