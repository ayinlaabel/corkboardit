import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCorkboardComponent } from './add-corkboard.component';

describe('AddCorkboardComponent', () => {
  let component: AddCorkboardComponent;
  let fixture: ComponentFixture<AddCorkboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCorkboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCorkboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
