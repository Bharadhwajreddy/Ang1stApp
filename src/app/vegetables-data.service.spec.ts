import { TestBed } from '@angular/core/testing';

import { VegetablesDataService } from './vegetables-data.service';

describe('VegetablesDataService', () => {
  let service: VegetablesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegetablesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
