import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpaceComponent } from './update-space.component';

describe('UpdateSpaceComponent', () => {
  let component: UpdateSpaceComponent;
  let fixture: ComponentFixture<UpdateSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
