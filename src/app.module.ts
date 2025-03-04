import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GenreImageModule } from './genre_image/genre_image.module';
import { GenreModule } from './genre/genre.module';
import { ContentGenresModule } from './content_genres/content_genres.module';
import { ContenModule } from './conten/conten.module';
import { CategoryModule } from './category/category.module';
import { CategoryContentModule } from './category_content/category_content.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { BillingHistoryModule } from './billing_history/billing_history.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { SubscriptionPlansModule } from './subscription_plans/subscription_plans.module';
import { ProfileModule } from './profile/profile.module';
import { LanguageModule } from './language/language.module';
import { DeviceModule } from './device/device.module';
import { SearchHistoryModule } from './search_history/search_history.module';
import { WatchHistoryModule } from './watch_history/watch_history.module';
import { RatingModule } from './rating/rating.module';



@Module({
  imports: [ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }), PrismaModule, AdminModule, UserModule, AuthModule,  GenreImageModule, GenreModule, ContentGenresModule, ContenModule, CategoryModule, CategoryContentModule, PaymentMethodModule, BillingHistoryModule, SubscriptionModule, SubscriptionPlansModule, ProfileModule, LanguageModule, DeviceModule, SearchHistoryModule, WatchHistoryModule, RatingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
