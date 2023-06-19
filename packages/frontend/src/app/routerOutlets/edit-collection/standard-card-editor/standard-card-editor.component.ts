import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StandardCard} from "../../../../entitys/StandardCard";

@Component({
  selector: 'app-standard-card-editor',
  templateUrl: './standard-card-editor.component.html',
  styleUrls: ['./standard-card-editor.component.css']
})
export class StandardCardEditorComponent {
  // @ts-ignore
  @Input() standardCard: StandardCard = new StandardCard();

  @Output() closeDialog = new EventEmitter<boolean>();

  question: string = "";
  answer: string = "";

  saveStandardCard() {
    // TODO implementieren
  }
}
