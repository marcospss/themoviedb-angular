import { TestBed } from '@angular/core/testing';

import { LoadingDialogService } from './loading-dialog.service';

describe('# Loading Dialog Service', () => {
  let service: LoadingDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingDialogService],
    });
    service = TestBed.inject(LoadingDialogService);
  });

  it('should be created Loading Dialog Service', () => {
    expect(service).toBeTruthy();
  });
});
