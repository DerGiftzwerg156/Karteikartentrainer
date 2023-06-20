import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCardComponent } from './standard-card.component';

describe('StandardCardComponent', () => {
  let component: StandardCardComponent;
  let fixture: ComponentFixture<StandardCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandardCardComponent]
    });
    fixture = TestBed.createComponent(StandardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
