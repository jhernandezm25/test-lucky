import { IsInt, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
     @IsNotEmpty()
     username: string;
     @IsNotEmpty()
     @MinLength(7)
     password: string
     @IsNotEmpty()
     name: string;
     @IsNotEmpty()
     address: string;
     @IsInt()
     @IsNotEmpty()
     cityId: number;
}
