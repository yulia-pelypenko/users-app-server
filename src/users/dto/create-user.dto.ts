import { IsEmail, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateUserDto {
  @IsUUID()
  id: string;

  @IsString()
  fullName: string;

  @IsString()
  gender: string;

  @IsEmail()
  email: string;

  @IsString()
  picture: string;

  @IsString()
  location: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}
