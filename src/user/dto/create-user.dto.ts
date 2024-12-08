import { Optional } from "@nestjs/common";
import { IsEmail, IsString, IsUrl } from "class-validator";

export class CreateUserDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @IsUrl()
  @Optional()
  avatarUrl?: string;
  @IsString()
  password: string
}