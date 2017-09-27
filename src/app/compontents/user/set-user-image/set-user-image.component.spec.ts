import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUserImageComponent } from './set-user-image.component';

describe('SetUserImageComponent', () => {
  let component: SetUserImageComponent;
  let fixture: ComponentFixture<SetUserImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetUserImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUserImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
