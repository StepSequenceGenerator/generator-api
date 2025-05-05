import { Controller, Get } from '@nestjs/common';
import { StepSequenceGeneratorService } from './step-sequence-generator.service';

@Controller('sg-step')
export class StepSequenceGeneratorController {
  constructor(private readonly stepSequenceGeneratorService: StepSequenceGeneratorService) {}

  @Get()
  sequence() {
    return this.stepSequenceGeneratorService.createSequence();
  }
}
