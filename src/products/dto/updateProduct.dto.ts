import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./createProduct.dto";

export class UpdateProductDTO extends PartialType (CreateProductDto) {}