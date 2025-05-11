import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsIn, IsOptional } from 'class-validator';

export class GenerateSequenceDto {
  @ApiPropertyOptional({
    enum: [1, 2, 3, 4, 5],
    description: 'масштабирует дистанция для движений для точного отображения покрытия поля',
  })
  @Type(() => Number)
  @IsIn([1, 2, 3, 4, 5])
  distanceFactor: 1 | 2 | 3 | 4 | 5;

  @ApiPropertyOptional({ enum: [1, 2, 3, 4], description: 'уровень дорожки (1 - 4)' })
  @Type(() => Number)
  @IsIn([1, 2, 3, 4])
  sequenceLevel: number;
}
