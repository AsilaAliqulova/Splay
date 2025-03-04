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
import { AudioTrackModule } from './audio_track/audio_track.module';
import { ContentAudioModule } from './content_audio/content_audio.module';
import { SeariesModule } from './searies/searies.module';
import { SeasonModule } from './season/season.module';
import { EpisodeModule } from './episode/episode.module';
import { EpisodeAudioModule } from './episode_audio/episode_audio.module';



@Module({
  imports: [ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }), PrismaModule, AdminModule, UserModule, AuthModule,  GenreImageModule, GenreModule, ContentGenresModule, ContenModule, CategoryModule, CategoryContentModule, PaymentMethodModule, BillingHistoryModule, SubscriptionModule, SubscriptionPlansModule, ProfileModule, LanguageModule, DeviceModule, SearchHistoryModule, WatchHistoryModule, RatingModule, AudioTrackModule, ContentAudioModule, SeariesModule, SeasonModule, EpisodeModule, EpisodeAudioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
