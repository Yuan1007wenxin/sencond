import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPsswordComponent } from './set-pssword.component';

describe('SetPsswordComponent', () => {
  let component: SetPsswordComponent;
  let fixture: ComponentFixture<SetPsswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPsswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPsswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
