import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StandardCard} from "../../../../entitys/StandardCard";
import {MultipleChoiceQuestionResponse} from "../../../../responses/MultipleChoiceQuestionResponse";
import {MultipleChoiceAnswer} from "../../../../entitys/MultipleChoiceAnswer";

@Component({
  selector: 'app-multiple-choice-card-editor',
  templateUrl: './multiple-choice-card-editor.component.html',
  styleUrls: ['./multiple-choice-card-editor.component.css']
})
export class MultipleChoiceCardEditorComponent {
  // @ts-ignore
  @Input() card: MultipleChoiceQuestionResponse = new MultipleChoiceQuestionResponse();

  @Output() closeDialog = new EventEmitter<boolean>();

  saveMultipleChoiceCard() {
    // TODO implementieren
  }

  addAnswer() {
    let question = new MultipleChoiceAnswer(0, this.card.question, "", false);
    this.card.answers.push(question);
  }

  deleteAnswer(answerOption: MultipleChoiceAnswer) {
    this.card.answers = this.card.answers.filter(item => item !== answerOption);
  }
}
