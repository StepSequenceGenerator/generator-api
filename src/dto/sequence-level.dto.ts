import { IsIn, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class SequenceLevelDto {
  @ApiPropertyOptional({ enum: [1, 2, 3, 4], description: 'уровень дорожки (1 - 4)' })
  @IsOptional()
  @Type(() => Number)
  @IsIn([1, 2, 3, 4])
  sequenceLevel?: number;
}
