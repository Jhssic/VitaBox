import { Module } from '@nestjs/common';
import { FichasPacientesController } from './fichas-pacientes.controller';
import { FichasPacientesService } from './fichas-pacientes.service';

@Module({
  controllers: [FichasPacientesController],
  providers: [FichasPacientesService]
})
export class FichasPacientesModule {}
