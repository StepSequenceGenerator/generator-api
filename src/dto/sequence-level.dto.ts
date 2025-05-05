import { IsIn, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class SequenceLevelDto {
  @IsOptional()
  @Type(() => Number)
  @IsIn([1, 2, 3, 4])
  sequenceLevel?: number;
}
