import { TestBed } from '@angular/core/testing';

import { ImageDiffusionService } from './image-diffusion.service';

describe('ImageDiffusionService', () => {
  let service: ImageDiffusionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageDiffusionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
