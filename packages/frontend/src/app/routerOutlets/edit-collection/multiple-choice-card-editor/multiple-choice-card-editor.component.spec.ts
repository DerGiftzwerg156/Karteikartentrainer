import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceCardEditorComponent } from './multiple-choice-card-editor.component';

describe('MultipleChoiceCardEditorComponent', () => {
  let component: MultipleChoiceCardEditorComponent;
  let fixture: ComponentFixture<MultipleChoiceCardEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleChoiceCardEditorComponent]
    });
    fixture = TestBed.createComponent(MultipleChoiceCardEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
