import { TestBed, inject } from '@angular/core/testing';
import { SamplesErrorInterceptor } from './samples-error-interceptor.service';

describe('SamplesErrorInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamplesErrorInterceptor]
    });
  });

  it('should be created', inject([SamplesErrorInterceptor], (service: SamplesErrorInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
