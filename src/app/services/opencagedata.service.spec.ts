import { TestBed } from '@angular/core/testing';

import { OpencagedataService } from './opencagedata.service';

describe('OpencagedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpencagedataService = TestBed.get(OpencagedataService);
    expect(service).toBeTruthy();
  });
});
