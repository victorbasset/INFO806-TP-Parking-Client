import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceRequestsComponent } from './space-requests.component';

describe('SpaceRequestsComponent', () => {
  let component: SpaceRequestsComponent;
  let fixture: ComponentFixture<SpaceRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
