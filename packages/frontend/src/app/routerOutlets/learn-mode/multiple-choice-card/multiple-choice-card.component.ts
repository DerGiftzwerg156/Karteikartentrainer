import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  MultipleChoiceQuestionDummy
} from "../../../../entitys/MultipleChoiceQuestionViewModels/MultipleChoiceQuestionDummy";

@Component({
  selector: 'app-multiple-choice-card',
  templateUrl: './multiple-choice-card.component.html',
  styleUrls: ['./multiple-choice-card.component.css']
})
export class MultipleChoiceCardComponent {
  // @ts-ignore
  @Input() actualQuestion: MultipleChoiceQuestionDummy;

  //@ts-ignore
  @Input() showAnswer: boolean;

}
