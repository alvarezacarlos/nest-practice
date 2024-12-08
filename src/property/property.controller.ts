import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Body,
  HttpCode,
  ParseArrayPipe,
  ParseIntPipe,
  Query,
  ParseBoolPipe,
  ValidationPipe,
  UsePipes,
  Patch,
  Headers,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import {
  createPropertySchema,
  CreatePropertyZodDto,
} from './dto/createpropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDTO } from './dto/pagination.dto';

// interface Service {
//   findAll();
//   findOne();
//   create();
//   update();
// }

@Controller('property')
export class PropertyController {
  // propertyService: PropertyService;
  // constructor(propertyService: PropertyService){
  constructor(private propertyService: PropertyService) {
    // DO NOT create your dependency, instead use DI (dependency injections)
    // we should not create the dependency of each class directly inside that class. Instead use DI. But first we need to know the term "Inversion of Control". This means that an external entity like the framework takes the control and creates the dependencies for the classes. which means that instead of creating the dependencies in the contructor we need to take the dependencies in the contructor.
    // this.propertyService = new PropertyService()
    // this.propertyService = propertyService;
    //with the dependency injection we do not need to create an instance ouside of the class manually and then pass it to the constructor class. Denpendency injection system of nest js will do that for us.
    // we just need to create the dependency of the PropertyController.
    // So we do not need the interface, neither manually initialize the dependencies in the contructor. So we can comment this line: this.propertyService = propertyService;
    // we just need to tell NEST JS that this class is dependent on the property service. Nest js will automatically create the property service instance and inject it to the property controller. We do that here: constructor(propertyService: PropertyService) {
    //Also we do not need to create the property service member: constructor(private propertyService: PropertyService)
    // by passing the private in the constructor nest will create a property member for the PropertyService class.
  }

  @Get()
  findAll(@Query() paginationDTO:PaginationDTO) {
    return this.propertyService.findAll(paginationDTO);
  }

  @Get(':id')
  // findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
  findOne(@Param('id', ParseIntPipe) id) {
    return this.propertyService.findOne(id);
  }

  @Post()
  // @UsePipes(new ZodValidationPipe(createPropertySchema))
  create(@Body() dto: CreatePropertyDto) {
    return this.propertyService.create(dto);
  }

  /**VALIDATING THE HEADERS*/
  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id,
    @Body() body: UpdatePropertyDto,
    // @Headers('host') host: HeadersDto, /**instead of the Headers decorator we will use our custom decorator */
    @RequestHeader(
      new ValidationPipe({
        whitelist: true,
        validateCustomDecorators: true,
      }),
    )
    header: HeadersDto,
  ) {
    /**return the host */
    return this.propertyService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIdPipe) id) {
    return this.propertyService.delete(id);
  }
}
