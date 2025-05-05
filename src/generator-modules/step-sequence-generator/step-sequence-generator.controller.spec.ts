import { Test, TestingModule } from '@nestjs/testing';
import { StepSequenceGeneratorController } from './step-sequence-generator.controller';
import { StepSequenceGeneratorService } from './step-sequence-generator.service';

describe('StepSequenceGeneratorController', () => {
  let controller: StepSequenceGeneratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StepSequenceGeneratorController],
      providers: [StepSequenceGeneratorService],
    }).compile();

    controller = module.get<StepSequenceGeneratorController>(StepSequenceGeneratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
