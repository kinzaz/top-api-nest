import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { API_URL } from './hh.consts';

@Injectable()
export class HhService {
  token: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.token = this.configService.get('HH_TOKEN') ?? '';
  }

  async getData(text: string) {
    try {
      const {} = await this.httpService
        .get(API_URL.vacancies, {
          params: {
            text,
            cluster: true,
          },
          headers: {
            'User-Agent': 'User',
            Authorization: `Bearer ${this.token}`,
          },
        })
        .toPromise();

      return this.parseData();
    } catch (error) {
      Logger.error(error);
    }
  }

  private parseData() {
    return {
      count: 1,
      juniorSalary: 10000,
      middleSalary: 100000,
      seniorSalary: 100000,
    };
  }
}
