import { Body, Controller, Get, Param, Post, ParseIntPipe, ParseUUIDPipe, Patch, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    //criar
    @Post()
    create(@Body() req: CreateUserDto){
        return this.usersService.create(req);
    }
    //listar todos localhost:3000/users
    @Get()
    findAll(){
        return this.usersService.findAll();
    }
    //listar um localhost:3000/users/1
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.usersService.findOne(id);
    }

    //atualizar
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() req: UpdateUserDTO) {
            return this.usersService.update(id, req);
        }

    //deletar
    @Delete(':id')
    remove (@Param('id', ParseIntPipe) id: number){
        return this.usersService.remove(id);
    }
}

