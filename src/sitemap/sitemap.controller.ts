import { Controller, Get, Header } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { addDays, format } from 'date-fns';
import { TopPageService } from 'src/top-page/top-page.service';
import { Builder } from 'xml2js';
import { CATEGORY_URL } from './sitemap.consts';

@Controller('sitemap')
export class SitemapController {
  domain: string;
  constructor(
    private readonly topPageService: TopPageService,
    private readonly configService: ConfigService,
  ) {
    this.domain = this.configService.get('DOMAIN') ?? '';
  }

  @Get('xml')
  @Header('content-type', 'text/xml')
  async sitemap() {
    const formatString = "yyyy-MM-dd'T'HH:mm:00.000xxx";
    let response = [
      {
        loc: `${this.domain}`,
        lastmod: format(addDays(new Date(), -1), formatString),
        changefreq: 'daily',
        priority: '1.0',
      },
    ];
    const pages = await this.topPageService.findAll();
    response = response.concat(
      pages.map((page) => ({
        loc: `${this.domain}/${CATEGORY_URL[page.firstCategory]}/${page.alias}`,
        lastmod: format(new Date(), formatString),
        changefreq: 'weekly',
        priority: '0.7',
      })),
    );
    const builder = new Builder({
      xmldec: { version: '1.0', encoding: 'UTF-8' },
    });

    return builder.buildObject({
      urlset: {
        $: {
          xmls: 'http://www.sitemaps.org/schemas/sitemap',
        },
        url: response,
      },
    });
  }
}
