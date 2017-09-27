import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreleaseComponent } from './myrelease.component';

describe('MyreleaseComponent', () => {
  let component: MyreleaseComponent;
  let fixture: ComponentFixture<MyreleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyreleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyreleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
