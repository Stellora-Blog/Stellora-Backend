import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class LoginUserDto {
  @ApiProperty({description: 'The email of the user',example:'nawrzqal@gmail.com'})
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({description: 'The password of the user',example:'password'})
  @IsNotEmpty()
  @IsString()
  password: string;
} 