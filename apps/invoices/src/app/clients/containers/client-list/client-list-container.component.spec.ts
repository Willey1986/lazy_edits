import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListContainerComponent } from './client-list-container.component';

describe('ClientListComponent', () => {
  let component: ClientListContainerComponent;
  let fixture: ComponentFixture<ClientListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
