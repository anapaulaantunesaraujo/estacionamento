import { TestBed } from '@angular/core/testing';

import { CadastrocarroService } from './cadastrocarro.service';

describe('CadastrocarroService', () => {
  let service: CadastrocarroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrocarroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
