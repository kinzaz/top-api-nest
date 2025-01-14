import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TopPageModule } from 'src/top-page/top-page.module';
import { SitemapController } from './sitemap.controller';
@Module({
  imports: [TopPageModule, ConfigModule],
  controllers: [SitemapController],
})
export class SitemapModule {}
