import { Controller, Delete, Get, Param, Post, Put, Body, HttpCode } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return { message: 'All Properties' };
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) { // get the id param
    return { message: `Find one by id: ${id}` };
  }
  
  @Get('/fetch/:id')
  findOneById(@Param() id) { // get all the params. id is now an object which has all the parameters of the route
    return id
  }

  //mutilple parameters in a route
  @Get('/pull/:id/:slug')
  // findOneItem(@Param('id') id:string, @Param('slug') slug:string) {
  findOneItem(@Param() id) { // get all the params. id is now an object which has all the parameters of the route
    return id
  }

  //post and body
  @Post()
  create(@Body() body) {
    return body;
  }

  //post and getting the param from the body directly
  @Post('item')
  createItem(@Body("name") name) {
    return name;
  }

  
  //post and returning the HTTP Code
  @Post('record')
  @HttpCode(202)
  createRecord(@Body("name") name) {
    return name;
  }


  @Put()
  update() {
    return { message: 'This will update a property' };
  }

  @Delete()
  delete() {
    return { message: 'This will delete a property' };
  }
}
