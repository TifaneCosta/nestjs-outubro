import { HttpException, HttpStatus, Injectable,  } from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserDTO } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async verifyUserExists(email: string): Promise<boolean> {
        const user = await this.prisma.users.findUnique({
          where: {
            email: email,
          },
        });
  
        return user ? true : false;
      }
    


    async create(data): Promise<users>{
        const {name, email, password} = data;


//busca pra saber se o usuário já existe
//findUnique é um método do prisma que busca um usuário pelo campo único por exemplo email
//findFirst é um método do prisma que busca o primeiro registro que encontrar.

//verificar se o usuário já existe

      const checkUser = await this.verifyUserExists(email,);
      let user = undefined;
      if (!checkUser) {
        const user = await this.prisma.users.create ({
          data: {
              name,
              email,
              password,
          },
      });

      }

       
        if (!user) {
            throw new HttpException(
              {
                status: HttpStatus.FORBIDDEN,
                message: 'Erro ao criar usuário!',
              },
              HttpStatus.FORBIDDEN,
            );
          }
      
        return user;
    }
    async findAll(): Promise <users []>{
        return await this.prisma.users.findMany();
    }
    async findOne(id: number): Promise <string> {
        return `Usuário ${id}!`;
    }
    async update(id: number, req:
        UpdateUserDTO): Promise <string> {
            return `Usuário ${id} atualizado com sucesso!`;
        }
    async remove(id: number): Promise <string> {
        return `Usuário ${id} deletado com sucesso!`;
    }
}
