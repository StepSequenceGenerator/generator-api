import { Injectable } from '@nestjs/common';

import twizzle, { DifficultLevelAmountStep } from 'step-sequence-generator';

const stepGenerator = twizzle();
stepGenerator.init();

@Injectable()
export class StepSequenceGeneratorService {
  createSequence(difficultLevel: DifficultLevelAmountStep) {
    return stepGenerator.generateSequence(difficultLevel);
  }

  mapSequenceLevelToDifficultLevelAmountStep(
    sequenceLevel: number | undefined,
  ): DifficultLevelAmountStep {
    switch (sequenceLevel) {
      case 1:
        return DifficultLevelAmountStep.LEVEL_1;
      case 2:
        return DifficultLevelAmountStep.LEVEL_2;
      case 3:
        return DifficultLevelAmountStep.LEVEL_3;
      case 4:
        return DifficultLevelAmountStep.LEVEL_4;
      default:
        return DifficultLevelAmountStep.LEVEL_1;
    }
  }
}
