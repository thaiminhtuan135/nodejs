import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}
  get stripe() {
    return {
      secretKey: this.configService.get('STRIPE_SECRET_KEY'),
    };
  }
}
