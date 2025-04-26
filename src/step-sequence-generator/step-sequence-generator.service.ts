import { Injectable } from '@nestjs/common';

@Injectable()
export class StepSequenceGeneratorService {
  createSequence() {
    return 'step-sequence-generator';
  }
}
