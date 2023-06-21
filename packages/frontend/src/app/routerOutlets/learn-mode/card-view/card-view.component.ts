import {Component, OnInit} from '@angular/core';
import {Collection} from "../../../../entitys/Collection";
import {StandardCard} from "../../../../entitys/StandardCard";
import {MultipleChoiceQuestionResponse} from "../../../../responses/MultipleChoiceQuestionResponse";
import {ActivatedRoute} from "@angular/router";
import {CollectionService} from "../../../../services/collection.service";
import {StandardCardService} from "../../../../services/standard-card.service";
import {MultipleChoiceService} from "../../../../services/multiple-choice.service";
import {
  MultipleChoiceQuestionDummy
} from "../../../../entitys/MultipleChoiceQuestionViewModels/MultipleChoiceQuestionDummy";
import {MultipleChoiceAnswer} from "../../../../entitys/MultipleChoiceAnswer";
import {
  MultipleChoiceAnswerDummy
} from "../../../../entitys/MultipleChoiceQuestionViewModels/MultipleChoiceAnswerDummy";

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
  answerPlanDummy: MultipleChoiceQuestionDummy;
  randomMode: boolean = false;

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
        })
      })
    })
  }

  setQuestionList(standardCards: StandardCard[], multipleChoiceQuestionResponses: MultipleChoiceQuestionResponse[]) {
    this.randomMode=false;
    this.questionNumber = 0;
    this.questionList = [];
    standardCards.forEach(item => {
      this.questionList.push(item);
    })
    multipleChoiceQuestionResponses.forEach(item => {
      this.questionList.push(item);
    })
    console.log(this.questionList)
    this.setQuestion()
  }

  setRandomQuestionList() {
    this.randomMode = true;
    this.questionNumber = 0;
    let randomQuestionList: any[] = [];
    randomQuestionList = this.shuffleArray(this.questionList);
    this.questionList = [];
    this.questionList = randomQuestionList;
    console.log(this.questionList)
    this.setQuestion();
  }

  private shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array]; // Kopie des Arrays erstellen

    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  }

  previousQuestion() {
    if (this.questionNumber - 1 >= 0) {
      this.questionNumber = this.questionNumber - 1;
      this.setQuestion();
    }
  }

  private setQuestion() {
    this.actualQuestion = this.questionList[this.questionNumber]
    if (this.actualQuestion.cardType.name == "MultipleChoice") {
      let answers: MultipleChoiceAnswerDummy[] = [];
      for (const item of this.actualQuestion.answers) {
        answers.push(new MultipleChoiceAnswerDummy(item.answer, item.correct, false));
      }
      this.answerPlanDummy = new MultipleChoiceQuestionDummy(this.actualQuestion.question.question, answers);
      console.log(this.answerPlanDummy)
    }
  }

  nextQuestion() {
    if (this.questionNumber + 1 < this.questionList.length) {
      this.questionNumber = this.questionNumber + 1;
      this.setQuestion()
    }
  }

  askQuestion(standardItem: MultipleChoiceQuestionResponse | StandardCard) {
    this.actualQuestion = standardItem;
    console.log(standardItem)
    //   TODO implementieren
  }

}
