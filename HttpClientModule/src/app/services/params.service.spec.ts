import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ParamsService } from './params.service';

describe('ParamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamsService],
      imports:[HttpClientModule]
    });
  });

  it('should be created', inject([ParamsService], (service: ParamsService) => {
    expect(service).toBeTruthy();
  }));
});
