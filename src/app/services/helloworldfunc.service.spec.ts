import { TestBed } from '@angular/core/testing';

import { HelloworldfuncService } from './helloworldfunc.service';

describe('HelloworldfuncService', () => {
  let service: HelloworldfuncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloworldfuncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
