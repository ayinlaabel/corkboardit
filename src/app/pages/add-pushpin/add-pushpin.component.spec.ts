import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPushpinComponent } from './add-pushpin.component';

describe('AddPushpinComponent', () => {
  let component: AddPushpinComponent;
  let fixture: ComponentFixture<AddPushpinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPushpinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPushpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
