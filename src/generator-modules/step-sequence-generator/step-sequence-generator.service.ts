import { Injectable } from '@nestjs/common';

import twizzle, {
  DistanceFactorType,
  DifficultLevelAmountStep,
  utils,
} from 'step-sequence-generator';

const { createDistanceFactor } = utils;
const stepGenerator = twizzle();
stepGenerator.init();

@Injectable()
export class StepSequenceGeneratorService {
  createSequence(difficultLevel: DifficultLevelAmountStep, distanceFactor: DistanceFactorType) {
    return stepGenerator.generateSequence(difficultLevel, distanceFactor);
  }

  convertToDistanceFactor(value: 1 | 2 | 3 | 4 | 5) {
    return createDistanceFactor(value);
  }

  mapSequenceLevelToDifficultLevelAmountStep(sequenceLevel: number): DifficultLevelAmountStep {
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
