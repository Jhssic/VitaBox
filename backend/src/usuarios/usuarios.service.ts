import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async criarUsuario(dados: Partial<Usuario>): Promise<Usuario> {
    const usuario = this.usuariosRepository.create(dados);
    return this.usuariosRepository.save(usuario);
  }

  async buscarTodos(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  async buscarUsuarioPorId(id: number): Promise<Usuario> {
    const usuario = await this.usuariosRepository.findOneBy({ id });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return usuario;
  }

  async removerUsuario(id: number): Promise<void> {
    await this.usuariosRepository.delete(id);
  }
}
