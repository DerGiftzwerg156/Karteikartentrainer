import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCardViewComponent } from './standard-card-view.component';

describe('StandardCardViewComponent', () => {
  let component: StandardCardViewComponent;
  let fixture: ComponentFixture<StandardCardViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandardCardViewComponent]
    });
    fixture = TestBed.createComponent(StandardCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
