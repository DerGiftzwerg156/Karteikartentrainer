import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLearnComponent } from './start-learn.component';

describe('StartLearnComponent', () => {
  let component: StartLearnComponent;
  let fixture: ComponentFixture<StartLearnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartLearnComponent]
    });
    fixture = TestBed.createComponent(StartLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
