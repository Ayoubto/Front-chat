import { TestBed } from '@angular/core/testing';

import { MyTestServiceService } from './my-test-service.service';

describe('MyTestServiceService', () => {
  let service: MyTestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
