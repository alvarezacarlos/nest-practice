import { Module, ValidationPipe } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { APP_PIPE } from '@nestjs/core';
import { PropertyService } from './property.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';

// ***** we will use global validation only in this property module
@Module({
  imports: [TypeOrmModule.forFeature([Property])],
  controllers: [PropertyController],
  /**** TURN OFF the global validation */
  providers: [
    {
      provide: APP_PIPE,

      // Global validation at a module level
      /** if we do not want to use any option. we can set the useClass to the  ValidationPipe. It actually applies the global validation on the property module without any options */
      // useClass: ValidationPipe,

      /**if we want to pass the options, instead of useClass we use the useValue and pass the instance of the validation  Pipe */
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true, /***add it to do transform */
        transformOptions: { //***add it to do transform */
          enableImplicitConversion: true,
        },
      }),
    },
    PropertyService,
  ],
})
export class PropertyModule {}
