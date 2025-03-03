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



@Module({
  imports: [ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }), PrismaModule, AdminModule, UserModule, AuthModule,  GenreImageModule, GenreModule, ContentGenresModule, ContenModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
