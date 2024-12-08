import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private configServer: ConfigService) {}

  @Get()
  getHello(): string {
    /**accessing env variables just as the DB_PORT*/
    // return this.configServer.get('DB_PORT')

    /**accessing config files and its data*/
    return this.configServer.get('dbconfig.dev.type')
  }
}