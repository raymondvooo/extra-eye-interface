import { TestBed } from '@angular/core/testing';

import { CameraDataService } from './camera-data.service';

describe('CameraDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CameraDataService = TestBed.get(CameraDataService);
    expect(service).toBeTruthy();
  });
});
