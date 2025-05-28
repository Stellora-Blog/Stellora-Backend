import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsArray, IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { Types } from 'mongoose';
export class UpdateUserDto extends PartialType(CreateUserDto) {

    @ApiProperty({description: 'The name of the user', example:'Nawrz Qal'})
    @IsOptional()
    @IsString()
    name?: string;

    @ApiProperty({description: 'The email of the user', example:'nawrzqal@gmail.com'})
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({description: 'The password of the user', example:'password'})
    @IsOptional()
    @IsString()
    @MinLength(8)
    password?: string;

    @ApiProperty({description: 'The posts of the user', example:'[ObjectId]'})
    @IsArray()
    posts?: Types.ObjectId[] | null ;
}
