export class CriarPacienteDto {
  nome: string;
  email: string;
  telefone?: string;
  data_nascimento: Date;
  genero: string;
  endereco?: string;
}
