import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';

bootstrap();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'debug', 'error', 'warn', 'verbose'],
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  setSwagger(app);

  const port = process.env.PORT ?? 4000;
  await app.listen(port);

  const logger = new Logger();
  logger.log(`Приложение запущено. port: ${port}`);
}

function setSwagger(app: INestApplication) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Sequence Generator API')
    .setDescription('Sequence Generator API documentation')
    .setVersion('1.0')
    .addTag('sg')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, documentFactory);
}
