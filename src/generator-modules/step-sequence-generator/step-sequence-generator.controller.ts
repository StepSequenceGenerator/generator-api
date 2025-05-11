import { Controller, Get, Query } from '@nestjs/common';
import { StepSequenceGeneratorService } from './step-sequence-generator.service';
import { GenerateSequenceDto } from '../../dto/generate-sequence.dto';

@Controller('sg-step')
export class StepSequenceGeneratorController {
  constructor(private readonly stepSequenceGeneratorService: StepSequenceGeneratorService) {}

  @Get()
  sequence(@Query() query: GenerateSequenceDto) {
    const { sequenceLevel, distanceFactor } = query;
    const stepAmount =
      this.stepSequenceGeneratorService.mapSequenceLevelToDifficultLevelAmountStep(sequenceLevel);
    const distanceFactorTyped =
      this.stepSequenceGeneratorService.convertToDistanceFactor(distanceFactor);
    return this.stepSequenceGeneratorService.createSequence(stepAmount, distanceFactorTyped);
  }
}
