import { Test, TestingModule } from '@nestjs/testing';
import { StepSequenceGeneratorService } from './step-sequence-generator.service';

describe('StepSequenceGeneratorService', () => {
  let service: StepSequenceGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StepSequenceGeneratorService],
    }).compile();

    service = module.get<StepSequenceGeneratorService>(StepSequenceGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
