import { TestBed } from '@angular/core/testing';

import { MimoduloService } from './mimodulo.service';

describe('MimoduloService', () => {
  let service: MimoduloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MimoduloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
