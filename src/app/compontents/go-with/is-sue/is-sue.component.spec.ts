import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsSueComponent } from './is-sue.component';

describe('IsSueComponent', () => {
  let component: IsSueComponent;
  let fixture: ComponentFixture<IsSueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsSueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsSueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
