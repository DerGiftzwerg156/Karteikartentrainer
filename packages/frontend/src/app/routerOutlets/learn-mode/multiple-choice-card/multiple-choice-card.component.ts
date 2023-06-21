import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MultipleChoiceQuestionResponse} from "../../../../responses/MultipleChoiceQuestionResponse";
import {MultipleChoiceQuestionDummy} from "../../../../entitys/MultipleChoiceQuestionViewModels/MultipleChoiceQuestionDummy";

@Component({
  selector: 'app-multiple-choice-card',
  templateUrl: './multiple-choice-card.component.html',
  styleUrls: ['./multiple-choice-card.component.css']
})
export class MultipleChoiceCardComponent {
  // @ts-ignore
  @Input() actualQuestion: MultipleChoiceQuestionDummy;

  showAnswer: boolean = false;

  @Output() nextQuestionEmitter = new EventEmitter<boolean>();

  @Output() previousQuestionEmitter = new EventEmitter<boolean>();

  nextQuestion() {
    this.showAnswer = false;
    this.nextQuestionEmitter.emit();
  }

  previousQuestion() {
    this.showAnswer = false;
    this.previousQuestionEmitter.emit();
  }


}
