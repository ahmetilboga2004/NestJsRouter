import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.enableVersioning({
    type: VersioningType.URI, // URI versiyonlama tipini seçiyoruz
  });
  await app.listen(3000);
  console.log(app.getHttpAdapter().getInstance()._router.stack);
}
bootstrap();
