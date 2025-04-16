/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Paciente } from 'src/pacientes/paciente.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 255 })
  senha_hash: string;

  @Column({ length: 15 })
  telefone: string;

  @Column({ length: 50 })
  especialidade: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_criacao: Date;

  @OneToMany(() => Paciente, (paciente) => paciente.usuario)
  pacientes: Paciente[];
}
