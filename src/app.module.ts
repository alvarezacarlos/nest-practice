import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { pgConfig } from 'dbConfig';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PropertyModule, TypeOrmModule.forRoot(pgConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
