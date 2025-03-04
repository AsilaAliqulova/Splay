import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubscriptionPlanDto } from './dto/create-subscription_plan.dto';
import { UpdateSubscriptionPlanDto } from './dto/update-subscription_plan.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SubscriptionPlansService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  create(createSubscriptionPlanDto: CreateSubscriptionPlanDto) {
    return this.prismaService.subscriptionPlans.create({ data: { ...createSubscriptionPlanDto } })

  }

  findAll() {
    return this.prismaService.subscriptionPlans.findMany()

  }

  async findOne(id: number) {
     const subscriptionPlans = await this.prismaService.subscriptionPlans.findUnique({ where: { id } })
        if (!subscriptionPlans) {
          throw new NotFoundException("SubscriptionPlans not found")
        }
        return subscriptionPlans
  }

  async update(id: number, updateSubscriptionPlanDto: UpdateSubscriptionPlanDto) {
    await this.findOne(id)
    return this.prismaService.subscriptionPlans.update({ where: { id }, data: { ...updateSubscriptionPlanDto } })
  
  }

 async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.subscriptionPlans.delete({ where: { id } })
 
  }
}

