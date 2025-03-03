import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SubscriptionService {
   constructor(
      private readonly prismaService: PrismaService
    ) { }
  create(createSubscriptionDto: CreateSubscriptionDto) {
    return this.prismaService.subscription.create({ data: { ...createSubscriptionDto } })

  }

  findAll() {
    return this.prismaService.subscription.findMany({ include: { plan: true,profile:true } })

  }

  async findOne(id: number) {
    const subscription = await this.prismaService.subscription.findUnique({ where: { id } })
       if (!subscription) {
         throw new NotFoundException("subscription not found")
       }
       return subscription
  }

async  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    await this.findOne(id)
    return this.prismaService.subscription.update({ where: { id }, data: { ...updateSubscriptionDto } })
 
  }

 
  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.subscription.delete({ where: { id } })
  }
}
