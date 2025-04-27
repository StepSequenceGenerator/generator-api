import { Injectable } from '@nestjs/common';

// import twizzle, { DifficultLevelAmountStep } from 'step-sequence-generator';
//
// const generator = twizzle();
// generator.init();

@Injectable()
export class StepSequenceGeneratorService {
  createSequence() {
    // return generator.generateSequence(DifficultLevelAmountStep.LEVEL_3);
  }
}
