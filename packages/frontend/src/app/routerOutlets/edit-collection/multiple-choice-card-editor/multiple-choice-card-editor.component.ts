import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoggerService} from "../../../../services/logger.service";
import {MultipleChoiceService} from "../../../../services/multiple-choice.service";
import {NewMultipleChoiceRequest} from "../../../../requests/NewMultipleChoiceRequest";
import {Collection} from "../../../../entitys/Collection";
import {MultipleChoiceAnswerPlan} from "../../../../entitys/MultipleChoiceAnswerPlan";

@Component({
  selector: 'app-multiple-choice-card-editor',
  templateUrl: './multiple-choice-card-editor.component.html',
  styleUrls: ['./multiple-choice-card-editor.component.css']
})
export class MultipleChoiceCardEditorComponent {
  @Input() cardId: number = 0;
  // @ts-ignore
  @Input() card: NewMultipleChoiceRequest;

  // @ts-ignore
  @Input() collection: Collection;

  @Output() closeDialog = new EventEmitter<boolean>();

  constructor(private logger: LoggerService, private multipleChoiceService: MultipleChoiceService) {
  }

  saveMultipleChoiceCard() {
    if (this.cardId != 0) {
      this.multipleChoiceService.deleteSingleQuestion(this.cardId).subscribe();
    }
    this.multipleChoiceService.createNewMultipleChoiceQuestion(new NewMultipleChoiceRequest(this.collection, this.card.question, this.card.answers)).subscribe(res => {
      this.closeDialog.emit(true);
    })
  }

  addAnswer() {
    let question = new MultipleChoiceAnswerPlan("", false);
    this.card.answers.push(question);
  }

  deleteAnswer(answerOption: MultipleChoiceAnswerPlan) {
    this.card.answers = this.card.answers.filter(item => item !== answerOption);
  }
}
