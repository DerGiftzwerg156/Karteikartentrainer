import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StandardCard} from "../../../../entitys/StandardCard";
import {LoggerService} from "../../../../services/logger.service";
import {StandardCardService} from "../../../../services/standard-card.service";
import {NewStandardCardRequest} from "../../../../requests/NewStandardCardRequest";
import {Collection} from "../../../../entitys/Collection";

@Component({
  selector: 'app-standard-card-editor',
  templateUrl: './standard-card-editor.component.html',
  styleUrls: ['./standard-card-editor.component.css']
})
export class StandardCardEditorComponent {
  // @ts-ignore
  @Input() standardCard: StandardCard = new StandardCard();
  // @ts-ignore
  @Input() collection: Collection;

  @Output() closeDialog = new EventEmitter<boolean>();

  constructor(private logger: LoggerService, private standardCardService: StandardCardService) {
  }

  saveStandardCard() {
    if (this.standardCard.id != 0) {
      this.standardCardService.deleteStandardCard(this.standardCard.id).subscribe();
    }
    this.standardCardService.createNewStandardCard(new NewStandardCardRequest(this.collection, this.standardCard.question, this.standardCard.answer)).subscribe(res => {
      this.logger.showInfo("Standard Karte wurde erfolgreich erstellt!")
      this.closeDialog.emit(true);
    });

  }
}
