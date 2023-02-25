import { TestBed } from '@angular/core/testing';

import { HelloworldfuncService } from './helloworldfunc.service';
import { HttpClient } from '@angular/common/http';


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
