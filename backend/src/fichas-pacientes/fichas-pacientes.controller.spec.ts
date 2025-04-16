import { Test, TestingModule } from '@nestjs/testing';
import { FichasPacientesController } from './fichas-pacientes.controller';

describe('FichasPacientesController', () => {
  let controller: FichasPacientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FichasPacientesController],
    }).compile();

    controller = module.get<FichasPacientesController>(
      FichasPacientesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
