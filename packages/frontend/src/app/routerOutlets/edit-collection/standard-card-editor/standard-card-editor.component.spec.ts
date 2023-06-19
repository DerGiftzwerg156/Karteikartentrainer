import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCardEditorComponent } from './standard-card-editor.component';

describe('StandardCardEditorComponent', () => {
  let component: StandardCardEditorComponent;
  let fixture: ComponentFixture<StandardCardEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandardCardEditorComponent]
    });
    fixture = TestBed.createComponent(StandardCardEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
