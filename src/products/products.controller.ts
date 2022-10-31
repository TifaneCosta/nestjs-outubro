import { Controller, Post, Body, Get, Param, ParseUUIDPipe,Patch  } from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDTO } from './dto/updateProduct.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor (private readonly productsService: ProductsService){}

    //criar
    @Post()
    create(@Body() req: CreateProductDto) {
        return this.productsService.create();
    }

    //listar todos localhost:3000/products
    @Get()
    findAll() {
        return this.productsService.findAll();
    }

    //listar um localhost:3000/products/1
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: number) {
        return this.productsService.findOne(id);
    }

    //atualizar
    @Patch(':id')
    update(
        @Param ('id', ParseUUIDPipe) id: number,
    @Body() req: UpdateProductDTO) {
        return this.productsService.update(id, req);
    }

}
