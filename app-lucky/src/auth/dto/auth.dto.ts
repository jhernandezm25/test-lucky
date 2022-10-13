import {IsNotEmpty, MinLength } from "class-validator";

export class AuthDto {
     @IsNotEmpty()
     username: string;
     @IsNotEmpty()
     @MinLength(7)
     password: string
}