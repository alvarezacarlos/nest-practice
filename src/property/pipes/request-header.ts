import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

/** ExecutionContext is a class that provides information about context of execution within the application. We can use it to do many things*/

// create a custom decorator
// insight we pass a call back which which takes a target DTO object, since we are going to use it with different DTOs we can set it to any.
// then we need to get the execution content
// insight the call back, first we need to get the headers of the current request with the execution context
// we turn the headers to the target DTO
// validate the DTO
// return the DTO
// If the validation fails we are going to throw a Bad Request Exception with the validation messages
// Finally we can use the RequestHeader decorator insight the property controller
export const RequestHeader = createParamDecorator(
  async (targetDTo: any, ctx: ExecutionContext) => {
    const headers = ctx.switchToHttp().getRequest().headers;

    // convert it to a DTO
    const dto = plainToInstance(targetDTo, headers, {
      excludeExtraneousValues: true,
    });

    // validate the DTO
    await validateOrReject(dto);

    // return the DTO
    return dto
  },
);
