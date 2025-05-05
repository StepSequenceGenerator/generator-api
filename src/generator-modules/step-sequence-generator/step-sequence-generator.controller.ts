import { Controller, Get, Query } from '@nestjs/common';
import { StepSequenceGeneratorService } from './step-sequence-generator.service';
import { SequenceLevelDto } from '../../dto/sequence-level.dto';

@Controller('sg-step')
export class StepSequenceGeneratorController {
  constructor(private readonly stepSequenceGeneratorService: StepSequenceGeneratorService) {}

  @Get()
  sequence(@Query() query: SequenceLevelDto) {
    const { sequenceLevel } = query;
    const stepAmount =
      this.stepSequenceGeneratorService.mapSequenceLevelToDifficultLevelAmountStep(sequenceLevel);
    return this.stepSequenceGeneratorService.createSequence(stepAmount);
  }
}
