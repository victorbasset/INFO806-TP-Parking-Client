import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyspacesComponent } from './myspaces.component';

describe('MyspacesComponent', () => {
  let component: MyspacesComponent;
  let fixture: ComponentFixture<MyspacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyspacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyspacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
