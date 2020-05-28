import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfHeaderComponent } from './child-of-header.component';

describe('ChildOfHeaderComponent', () => {
  let component: ChildOfHeaderComponent;
  let fixture: ComponentFixture<ChildOfHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildOfHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
