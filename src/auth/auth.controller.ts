import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

//http://localhost:3000/auth
@Controller('auth')
export class AuthController {
    //injeção de dependencia
    constructor (private readonly authService: AuthService){}

//http://localhost:3000/auth/login
//rest API trabalha com verbos ou ações 
/*
REST API
Trabalha com verbos
GET - Todos
GET - 1
POST - Cadastro
PUT/PATCH - alteração
Delete - Exclusão
O get sempre vem duas vezes, uma para todos e outra para 1
se tudo der certo o retorno é 200
ERRO 500, 503 olha o terminal, deu erro no servidor
ERRO 404, não encontrou o que você queria

*/
    
    @Post('login')
    async authLogin(@Body() req){
        const {login, password} = req;
        console.log('Login: ', login);
        console.log('Senha: ', password);
        return this.authService.authLogin(login, password);
}
}
