import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StepSequenceGeneratorModule } from './generator-modules/step-sequence-generator/step-sequence-generator.module';

@Module({
  imports: [StepSequenceGeneratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
