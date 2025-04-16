import { Test, TestingModule } from '@nestjs/testing';
import { FichasPacientesService } from './fichas-pacientes.service';

describe('FichasPacientesService', () => {
  let service: FichasPacientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FichasPacientesService],
    }).compile();

    service = module.get<FichasPacientesService>(FichasPacientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
