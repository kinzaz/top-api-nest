import { Module } from '@nestjs/common';
import { HhModule } from 'src/hh/hh.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TopPageController } from './top-page.controller';
import { TopPageService } from './top-page.service';

@Module({
  imports: [PrismaModule, HhModule],
  controllers: [TopPageController],
  providers: [TopPageService],
  exports: [TopPageService],
})
export class TopPageModule {}
