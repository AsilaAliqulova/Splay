import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentMethodService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.prismaService.paymentMethod.create({ data: { ...createPaymentMethodDto } })
  }

  findAll() {
    return this.prismaService.paymentMethod.findMany()
  }

  async findOne(id: number) {
    const payment_method = await this.prismaService.paymentMethod.findUnique({ where: { id } })
    if (!payment_method) {
      throw new NotFoundException("payment_method not found")
    }
    return payment_method
  }

 async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    await this.findOne(id)
    return this.prismaService.paymentMethod.update({ where: { id }, data: { ...updatePaymentMethodDto } })

  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.paymentMethod.delete({ where: { id } })

  }
}
