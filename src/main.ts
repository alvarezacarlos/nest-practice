import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ***** commenting the global validation here. We'll set the global validation on a specific module.
  // global validations. This enforce the validation accross all the application including all modules.
  // app.useGlobalPipes(
    // new ValidationPipe({
    //   whitelist: true,
    //   forbidNonWhitelisted: true,
    //   // we do not need the groups validations in global validations. Just the first group will be applied
    // }),
  // );

  console.log(process.env.dbName)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
