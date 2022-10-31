import {IsNotEmpty, IsString, IsNumber} from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    nameProduct: string;

    @IsString()
    @IsNotEmpty()
    category: string;

    
    @IsNotEmpty()
    price: string;
}