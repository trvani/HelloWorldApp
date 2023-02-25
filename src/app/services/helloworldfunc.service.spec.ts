import { TestBed } from '@angular/core/testing';

import { HelloworldfuncService } from './helloworldfunc.service';
import { HttpClientModule } from '@angular/common/http';


describe('HelloworldfuncService', () => {
  let service: HelloworldfuncService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Add HttpClientModule here
      providers: [HelloworldfuncService]
    });
    service = TestBed.inject(HelloworldfuncService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
