import { Injectable } from '@nestjs/common';

import twizzle, { DifficultLevelAmountStep } from 'step-sequence-generator';

const stepGenerator = twizzle();
stepGenerator.init();

@Injectable()
export class StepSequenceGeneratorService {
  createSequence(difficultLevel: DifficultLevelAmountStep = DifficultLevelAmountStep.LEVEL_3) {
    return stepGenerator.generateSequence(difficultLevel);
  }
}
