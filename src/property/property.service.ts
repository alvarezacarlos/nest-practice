import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDTO } from './dto/pagination.dto';
import { DEFAULT_PAGE_SIZE } from 'src/util/constants';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}

  async findOne(id: number) {
    const response = await this.propertyRepo.findOne({
      where: {
        id,
      },
    });

    if (!response) throw new NotFoundException();

    return response;
  }

  async findAll(paginationDTO: PaginationDTO) {
    return await this.propertyRepo.find({
      skip: paginationDTO.skip,
      take: paginationDTO.limit ?? DEFAULT_PAGE_SIZE,
    });
  }

  async create(dto: CreatePropertyDto) {
    return await this.propertyRepo.save(dto);
  }

  async update(id: number, dto: UpdatePropertyDto) {
    return await this.propertyRepo.update(
      {
        id,
      },
      dto,
    );
  }

  async delete(id: number) {
    return await this.propertyRepo.delete({ id });
  }
}
