import { TestBed } from '@angular/core/testing';

import { ClientResourceService } from './client-resource.service';

describe('ClientResourceService', () => {
  let service: ClientResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
