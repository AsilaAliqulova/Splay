import { Injectable } from '@nestjs/common';
import { CreateSubscriptionPlanDto } from './dto/create-subscription_plan.dto';
import { UpdateSubscriptionPlanDto } from './dto/update-subscription_plan.dto';

@Injectable()
export class SubscriptionPlansService {
  create(createSubscriptionPlanDto: CreateSubscriptionPlanDto) {
    return 'This action adds a new subscriptionPlan';
  }

  findAll() {
    return `This action returns all subscriptionPlans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscriptionPlan`;
  }

  update(id: number, updateSubscriptionPlanDto: UpdateSubscriptionPlanDto) {
    return `This action updates a #${id} subscriptionPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscriptionPlan`;
  }
}
