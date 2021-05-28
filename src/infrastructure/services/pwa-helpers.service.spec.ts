import { TestBed } from '@angular/core/testing';

import { PwaHelpersService } from './pwa-helpers.service';

describe('PwaHelpersService', () => {
  let service: PwaHelpersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PwaHelpersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
