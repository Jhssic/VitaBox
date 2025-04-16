import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { FichasPacientesService } from './fichas-pacientes.service';
import { FichaPaciente } from './entities/ficha-paciente.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('fichas')
export class FichasPacientesController {
  constructor(private readonly service: FichasPacientesService) {}

  @Post()
  criar(@Body() data: Partial<FichaPaciente>) {
    return this.service.criar(data);
  }

  @Get()
  listar() {
    return this.service.listar();
  }

  @Get(':id')
  buscar(@Param('id') id: string) {
    return this.service.buscarPorId(+id);
  }

  @Put(':id')
  atualizar(@Param('id') id: string, @Body() data: Partial<FichaPaciente>) {
    return this.service.atualizar(+id, data);
  }

  @Delete(':id')
  remover(@Param('id') id: string) {
    return this.service.remover(+id);
  }
}
