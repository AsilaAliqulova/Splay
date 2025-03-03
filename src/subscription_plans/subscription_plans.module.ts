import { Module } from '@nestjs/common';
import { SubscriptionPlansService } from './subscription_plans.service';
import { SubscriptionPlansController } from './subscription_plans.controller';

@Module({
  controllers: [SubscriptionPlansController],
  providers: [SubscriptionPlansService],
})
export class SubscriptionPlansModule {}
