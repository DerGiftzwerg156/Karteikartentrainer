import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StandardCard} from "../../../../entitys/StandardCard";

@Component({
  selector: 'app-standard-card',
  templateUrl: './standard-card.component.html',
  styleUrls: ['./standard-card.component.css']
})
export class StandardCardComponent {
  // @ts-ignore
  @Input() actualQuestion: StandardCard;

  // @ts-ignore
  @Input() showAnswer: boolean;

  @Output() nextQuestionEmitter = new EventEmitter<boolean>();

  @Output() previousQuestionEmitter = new EventEmitter<boolean>();

}
