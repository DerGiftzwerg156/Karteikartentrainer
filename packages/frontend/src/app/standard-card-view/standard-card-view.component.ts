import {Component, OnInit} from '@angular/core';
import {StandardCard} from "../../entitys/StandardCard";
import {StandardCardService} from "../../services/standard-card.service";

@Component({
  selector: 'app-standard-card-view',
  templateUrl: './standard-card-view.component.html',
  styleUrls: ['./standard-card-view.component.css']
})
export class StandardCardViewComponent implements OnInit {
  actualQuestion: StandardCard = new StandardCard(0, "", "");
  standardCards: StandardCard[] = [];
  actualCard = 0;
  numberOfCards = 0;
  questionView: boolean = true;
  answerView: boolean = false;

  constructor(private standardCardService: StandardCardService) {
  }

  ngOnInit() {
    this.getAllStandardCards()
  }

  getAllStandardCards() {
    this.standardCardService.getAllStandardCards().subscribe(res => {
      this.standardCards = res;
      this.actualQuestion = res[0]
      this.numberOfCards = res.length
      console.log(this.numberOfCards)
      console.log(res)
    })
  }

  showAnswer() {
    this.questionView = false;
    this.answerView = true;
  }

  showNextQuestion() {
    if (this.actualCard < this.numberOfCards-1) {
      this.actualCard = this.actualCard + 1
      this.actualQuestion = this.standardCards[this.actualCard]
      this.questionView = true;
      this.answerView = false;
    }
  }

  showPreviousQuestion() {
    if (this.actualCard != 0) {
      this.actualCard = this.actualCard - 1
      this.actualQuestion = this.standardCards[this.actualCard]
      this.questionView = true;
      this.answerView = false;
    }
  }

  showFirstQuestion() {
    this.actualCard = 0;
    this.actualQuestion = this.standardCards[this.actualCard]
    this.questionView = true;
    this.answerView = false;
  }
}
