import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return { message: 'All Properties' };
  }

  @Post()
  create() {
    return { message: 'This will create a property' };
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
