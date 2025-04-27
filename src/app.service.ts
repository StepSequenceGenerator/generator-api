import { Injectable } from '@nestjs/common';
import twizzle from 'step-sequence-generator';

const gen = twizzle();
gen.init();
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
