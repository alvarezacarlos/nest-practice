import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  // @IsString() // always validate the name
  @IsString({ always: true }) // always validate the name
  // @Length(2, 10, { message: 'error on length' })
  @Length(2, 10)
  name: string;

  @IsString()
  // @Length(2, 20, { groups:['create'], message: 'error on length' })   // adding grupos. // we do not need the groups validations in global validations. Just the first group will be applied
  // @Length(2, 15, { groups:['update'], message: 'error on length' })  // adding grupos
  @Length(2, 50, { groups: ['create'] }) // adding grupos. // we do not need the groups validations in global validations. Just the first group will be applied
  @Length(2, 50, { groups: ['update'] }) // adding grupos
  description: string;

  @IsInt({ always: true })
  @IsPositive({ always: true })
  // @IsInt()
  // @IsPositive()
  price: number;
}
