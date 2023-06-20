import {Component, OnInit} from '@angular/core';
import {Collection} from "../../../../entitys/Collection";
import {StandardCard} from "../../../../entitys/StandardCard";
import {MultipleChoiceQuestionResponse} from "../../../../responses/MultipleChoiceQuestionResponse";
import {MultipleChoiceQuestion} from "../../../../entitys/MultipleChoiceQuestion";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../../entitys/User";
import {Token} from "../../../../entitys/Token";
import {CardType} from "../../../../entitys/CardType";
import {MultipleChoiceAnswer} from "../../../../entitys/MultipleChoiceAnswer";
import {CollectionService} from "../../../../services/collection.service";
import {StandardCardService} from "../../../../services/standard-card.service";
import {MultipleChoiceService} from "../../../../services/multiple-choice.service";

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  // @ts-ignore
  collection: Collection;

  // @ts-ignore
  standardCards: StandardCard[];

  // @ts-ignore
  multipleChoiceCards: MultipleChoiceQuestionResponse[];

  questionList: any[] = [];
  questionNumber: number = 0;
  // @ts-ignore
  actualQuestion: any;
  // @ts-ignore
  previousQuestionItem: any;
  // @ts-ignore
  nextQuestionItem: any;
  showAnswer: boolean = false;

  constructor(private route: ActivatedRoute, private collectionService: CollectionService, private standardCardService: StandardCardService, private multipleChoiceService: MultipleChoiceService) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const accessKey = routeParams.get('collectionId')!
    this.collectionService.getCollectionByAccessKey(accessKey).subscribe(res => {
      this.collection = res;
      this.standardCardService.getAllStandardCardsByCollection(this.collection.id).subscribe(res => {
        this.standardCards = res;
        this.multipleChoiceService.getAllMultipleChoiceByCollection(this.collection.id).subscribe(res => {
          this.multipleChoiceCards = res;
          this.setQuestionList(this.standardCards, this.multipleChoiceCards);
          console.log(this.questionList)
          this.actualQuestion = this.questionList[this.questionNumber];
          this.nextQuestionItem = this.questionList[this.questionNumber + 1];
          console.log(this.nextQuestionItem)
        })
      })
    })
  }

  setQuestionList(standardCards: StandardCard[], multipleChoiceQuestionResponses: MultipleChoiceQuestionResponse[]) {
    standardCards.forEach(item => {
      this.questionList.push(item);
    })
    multipleChoiceQuestionResponses.forEach(item => {
      this.questionList.push(item);
    })
  }

  setRandomQuestionList() {
    //   TODO Random abfragen erstellen
  }

  previousQuestion() {
    this.actualQuestion = null;
    this.showAnswer = false;
    this.questionNumber = this.questionNumber - 1;
    this.actualQuestion = this.questionList[this.questionNumber]
  }

  nextQuestion() {
    this.showAnswer = false;
    this.questionNumber = this.questionNumber + 1;
    this.actualQuestion = this.questionList[this.questionNumber];
  }

  askQuestion(standardItem: MultipleChoiceQuestionResponse | StandardCard) {
    this.showAnswer = false;
    this.actualQuestion = standardItem;
    console.log(standardItem)
    //   TODO implementieren
  }

}
