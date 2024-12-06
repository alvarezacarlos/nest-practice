import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {} // using the dependency injections

  transform(value: any, metadata: ArgumentMetadata) {
    // try {
    //   const parsedValue = this.schema.parse(value);
    //   return parsedValue;
    // } catch (error) {
    //   throw new BadRequestException('validation failed');
    // }

    const parsedValue = this.schema.safeParse(value);
    if (parsedValue.success) return parsedValue.data;
    throw new BadRequestException(parsedValue.error.format());
  }
}