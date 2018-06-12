import { TestBed, inject } from '@angular/core/testing';
import { HeadersService } from './headers.service';
import { HttpClientModule } from '@angular/common/http';
describe('HeadersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeadersService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([HeadersService], (service: HeadersService) => {
    expect(service).toBeTruthy();
  }));
});
