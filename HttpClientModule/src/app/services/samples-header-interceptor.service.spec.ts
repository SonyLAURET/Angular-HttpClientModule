import { TestBed, inject } from '@angular/core/testing';
import { SamplesHeaderInterceptor } from './samples-header-interceptor.service';

describe('SamplesHeaderInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamplesHeaderInterceptor]
    });
  });

  it('should be created', inject([SamplesHeaderInterceptor], (service: SamplesHeaderInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
