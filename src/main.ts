import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');
  app.useLogger(console);
  await app.listen(3000);
  console.log(app.getHttpAdapter().getInstance()._router.stack);
}
bootstrap();
