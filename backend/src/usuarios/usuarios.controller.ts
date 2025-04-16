import { Controller, Post, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuario.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('registrar')
  async registrar(@Body() data: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.criarUsuario(data);
  }
}
