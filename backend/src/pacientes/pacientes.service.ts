import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from './paciente.entity';
import { CriarPacienteDto } from './dto/criar-paciente.dto';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class PacientesService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
  ) {}

  async criar(dto: CriarPacienteDto, usuarioId: number): Promise<Paciente> {
    const novoPaciente = this.pacienteRepository.create({
      ...dto,
      usuario: { id: usuarioId } as Usuario,
    });

    return this.pacienteRepository.save(novoPaciente);
  }
}
