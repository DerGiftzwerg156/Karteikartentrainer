import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MultipleChoiceQuestionResponse} from "../../../../responses/MultipleChoiceQuestionResponse";

@Component({
  selector: 'app-multiple-choice-card',
  templateUrl: './multiple-choice-card.component.html',
  styleUrls: ['./multiple-choice-card.component.css']
})
export class MultipleChoiceCardComponent {
  // @ts-ignore
  @Input() actualQuestion: MultipleChoiceQuestionResponse;

  @Input() showAnswer: boolean = false;

  @Output() nextQuestionEmitter = new EventEmitter<boolean>();

  @Output() previousQuestionEmitter = new EventEmitter<boolean>();


}
