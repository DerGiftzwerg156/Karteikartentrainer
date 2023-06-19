import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeranModeComponent } from './leran-mode.component';

describe('LeranModeComponent', () => {
  let component: LeranModeComponent;
  let fixture: ComponentFixture<LeranModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeranModeComponent]
    });
    fixture = TestBed.createComponent(LeranModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
