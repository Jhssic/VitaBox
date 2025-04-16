/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Paciente } from 'src/pacientes/paciente.entity';

@Entity('fichas_pacientes')
export class FichaPaciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  descricao: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_criacao: Date;

  @ManyToOne(() => Paciente, (paciente: Paciente) => paciente.fichas, {
    onDelete: 'CASCADE',
  })
  paciente: Paciente;
  @OneToMany(() => FichaPaciente, (ficha) => ficha.paciente)
  fichas: FichaPaciente[];
}
