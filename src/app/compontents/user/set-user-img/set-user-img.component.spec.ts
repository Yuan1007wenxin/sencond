import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUserImgComponent } from './set-user-img.component';

describe('SetUserImgComponent', () => {
  let component: SetUserImgComponent;
  let fixture: ComponentFixture<SetUserImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetUserImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUserImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
