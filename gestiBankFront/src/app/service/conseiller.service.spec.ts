import { TestBed, inject } from '@angular/core/testing';

import { ConseillerService } from './conseiller.service';

describe('ConseillerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConseillerService]
    });
  });

  it('should be created', inject([ConseillerService], (service: ConseillerService) => {
    expect(service).toBeTruthy();
  }));
});
