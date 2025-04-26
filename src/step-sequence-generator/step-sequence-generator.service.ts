import { Injectable } from '@nestjs/common';

import twizzle, { DifficultLevelAmountStep } from 'step-sequence-generator';

const stepGenerator = twizzle();
stepGenerator.init();

@Injectable()
export class StepSequenceGeneratorService {
  createSequence() {
    return stepGenerator.generateSequence(DifficultLevelAmountStep.LEVEL_4);
  }
}
