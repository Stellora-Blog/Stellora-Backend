import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({description: 'The name of the user', example:'Nawrz Qal'})
  @IsNotEmpty()
  @IsString()
  name: string;


  @ApiProperty({description: 'The email of the user', example:'nawrzqal@gmail.com'})
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({description: 'The password of the user', example:'password'})
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({description: 'The type of the user', example:'admin', enum: ['admin', 'user']})
  @IsNotEmpty()
  @IsEnum(['admin', 'user'], { message: 'User type must be either admin or user' })
  userType: 'admin' | 'user';
}