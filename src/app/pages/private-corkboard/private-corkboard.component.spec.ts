import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCorkboardComponent } from './private-corkboard.component';

describe('PrivateCorkboardComponent', () => {
  let component: PrivateCorkboardComponent;
  let fixture: ComponentFixture<PrivateCorkboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateCorkboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCorkboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
