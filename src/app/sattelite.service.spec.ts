import { TestBed } from '@angular/core/testing';

import { SatteliteService } from './sattelite.service';

describe('SatteliteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SatteliteService = TestBed.get(SatteliteService);
    expect(service).toBeTruthy();
  });
});
