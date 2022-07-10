import { TestBed } from '@angular/core/testing';

import { CriarusuarioService } from './criarusuariosv.service';

describe('CriarusuariosvService', () => {
  let service: CriarusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriarusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
