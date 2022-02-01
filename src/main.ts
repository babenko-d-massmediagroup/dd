import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('PORT');
  const NODE_ENV = configService.get<string>('NODE_ENV');
  const FRONT_END_URL = configService.get<string>('FRONT_END_URL');

  app.enableCors({
    credentials: true,
    origin: NODE_ENV === 'dev' ? '*' : FRONT_END_URL,
  });

  await app.listen(PORT);
}
bootstrap();
