import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { HhModule } from './hh/hh.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { SitemapModule } from './sitemap/sitemap.module';
import { TopPageModule } from './top-page/top-page.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    AuthModule,
    TopPageModule,
    ProductModule,
    ReviewModule,
    ConfigModule.forRoot(),
    PrismaModule,
    FilesModule,
    SitemapModule,
    HhModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
