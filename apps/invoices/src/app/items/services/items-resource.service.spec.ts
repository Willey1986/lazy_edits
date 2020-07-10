import { TestBed } from '@angular/core/testing';

import { ItemsResourceService } from './items-resource.service';

describe('ItemsResourceService', () => {
  let service: ItemsResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
