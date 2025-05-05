import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  greeting(): string {
    return 'API FOR SEQUENCE GENERATOR';
  }
}
