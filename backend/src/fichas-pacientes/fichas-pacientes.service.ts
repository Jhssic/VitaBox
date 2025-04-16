/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FichaPaciente } from './entities/ficha-paciente.entity';
import { Paciente } from 'src/pacientes/paciente.entity';

@Injectable()
export class FichasPacientesService {
  listar() {
    throw new Error('Method not implemented.');
  }
  buscarPorId(arg0: number) {
    throw new Error('Method not implemented.');
  }
  atualizar(arg0: number, data: Partial<FichaPaciente>) {
    throw new Error('Method not implemented.');
  }
  remover(arg0: number) {
    throw new Error('Method not implemented.');
  }
  criar(data: Partial<FichaPaciente>) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(FichaPaciente)
    private fichasRepository: Repository<FichaPaciente>,

    @InjectRepository(Paciente)
    private pacientesRepository: Repository<Paciente>,
  ) {}

  async criarFicha(
    pacienteId: number,
    descricao: string,
  ): Promise<FichaPaciente> {
    const paciente = await this.pacientesRepository.findOneBy({
      id: pacienteId,
    });

    if (!paciente) {
      throw new Error('Paciente não encontrado');
    }

    const ficha = this.fichasRepository.create({
      descricao,
      paciente,
    });

    return this.fichasRepository.save(ficha);
  }

  async buscarFichasPorPaciente(pacienteId: number): Promise<FichaPaciente[]> {
    return this.fichasRepository.find({
      where: { paciente: { id: pacienteId } },
      relations: ['paciente'],
    });
  }
}
