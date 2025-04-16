/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, Post, Body, Request } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { CriarPacienteDto } from './dto/criar-paciente.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('pacientes')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Post()
  async criar(@Body() dto: CriarPacienteDto, @Request() req) {
    const usuarioId = req.user.userId;
    return this.pacientesService.criar(dto, usuarioId);
  }
}
