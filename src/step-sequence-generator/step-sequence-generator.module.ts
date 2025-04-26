import { Module } from '@nestjs/common';
import { StepSequenceGeneratorService } from './step-sequence-generator.service';
import { StepSequenceGeneratorController } from './step-sequence-generator.controller';

@Module({
  controllers: [StepSequenceGeneratorController],
  providers: [StepSequenceGeneratorService],
})
export class StepSequenceGeneratorModule {}
