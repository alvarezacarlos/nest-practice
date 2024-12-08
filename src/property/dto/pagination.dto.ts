import { IsNumber, IsOptional, IsPositive } from "class-validator";

export class PaginationDTO{
  /**The skip specify the number of records that weed need to skip before starting to return the results.
   * The limit specify the max number of redors to be return in a query
   */

  @IsNumber()
  @IsPositive()
  @IsOptional()
  skip: number; 

  @IsNumber()
  @IsPositive()
  @IsOptional()
  limit: number;
}