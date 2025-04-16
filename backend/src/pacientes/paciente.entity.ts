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
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { FichaPaciente } from 'src/fichas-pacientes/entities/ficha-paciente.entity';

@Entity('pacientes')
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 15, nullable: true })
  telefone: string;

  @Column({ type: 'date' })
  data_nascimento: Date;

  @Column({ length: 10 })
  genero: string;

  @Column({ type: 'text', nullable: true })
  endereco: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.pacientes, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;

  @OneToMany(() => FichaPaciente, (ficha) => ficha.paciente)
  fichas: FichaPaciente[];
}
