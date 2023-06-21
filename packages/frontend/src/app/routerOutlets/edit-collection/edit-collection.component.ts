import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Collection} from "../../../entitys/Collection";
import {StandardCard} from "../../../entitys/StandardCard";
import {MultipleChoiceQuestionResponse} from "../../../responses/MultipleChoiceQuestionResponse";
import {CardType} from "../../../entitys/CardType";
import {LoggerService} from "../../../services/logger.service";
import {CollectionService} from "../../../services/collection.service";
import {StandardCardService} from "../../../services/standard-card.service";
import {MultipleChoiceService} from "../../../services/multiple-choice.service";
import {NewMultipleChoiceRequest} from "../../../requests/NewMultipleChoiceRequest";
import {MultipleChoiceAnswerPlan} from "../../../entitys/MultipleChoiceAnswerPlan";

@Component({
  selector: 'app-edit-collection',
  templateUrl: './edit-collection.component.html',
  styleUrls: ['./edit-collection.component.css']
})
export class EditCollectionComponent implements OnInit {
  // @ts-ignore
  cardTypes: CardType[] = []
  // @ts-ignore
  collection: Collection;
  // @ts-ignore
  standardCards: StandardCard[];
  multipleChoiceQuestions: MultipleChoiceQuestionResponse[] = [];

  isEditorVisible: boolean = false;
  editorType: string = "";

  // @ts-ignore
  selectedStandardCard: StandardCard;
  // @ts-ignore
  selectedMultipleChoiceCard: NewMultipleChoiceRequest;
  selectedMultipleChoiceCardId: number = 0;
  test: boolean = true;
  sideBarVisible: boolean = false;


  constructor(private route: ActivatedRoute, private logger: LoggerService, private collectionService: CollectionService, private standardCardService: StandardCardService, private multipleChoiceService: MultipleChoiceService) {
  }

  ngOnInit() {
    this.loadCards();
  }

  loadCards() {
    const routeParams = this.route.snapshot.paramMap;
    const collectionId = routeParams.get('collectionId');
    this.collectionService.getCollectionByAccessKey(collectionId!).subscribe(res => {
      this.collection = res;
      this.standardCardService.getAllStandardCardsByCollection(res.id).subscribe(res => {
        this.standardCards = res;
      })
      this.multipleChoiceService.getAllMultipleChoiceByCollection(res.id).subscribe(res => {
        this.multipleChoiceQuestions = res;
      })
    })
  }

  editStandardCard(singleStandardCard: StandardCard) {
    this.selectedStandardCard = singleStandardCard;
    this.editorType = "standard";
    this.isEditorVisible = true;
  }

  deleteStandardCard(singleStandardCard: StandardCard) {
    this.standardCardService.deleteStandardCard(singleStandardCard.id).subscribe(() => {
      this.loadCards()
    });
  }

  createNewMultipleChoiceCard() {
    this.sideBarVisible=false;
    this.selectedMultipleChoiceCard = new NewMultipleChoiceRequest(this.collection, "", [new MultipleChoiceAnswerPlan("", false)]);
    this.editorType = "multipleChoice";
    this.isEditorVisible = true;
  }

  createNewStandardCard() {
    this.sideBarVisible=false;
    this.selectedStandardCard = new StandardCard(0, this.collection, this.cardTypes[0], "", "");
    this.isEditorVisible = true;
    this.editorType = "standard";
  }

  editMultipleChoiceCard(singleMultipleChoiceCard: MultipleChoiceQuestionResponse) {
    this.selectedMultipleChoiceCardId = singleMultipleChoiceCard.question.id;
    let answers: MultipleChoiceAnswerPlan[] = [];
    singleMultipleChoiceCard.answers.forEach(item => {
      console.log(item)
      answers.push(new MultipleChoiceAnswerPlan(item.answer, item.correct));
    });
    this.selectedMultipleChoiceCard = new NewMultipleChoiceRequest(this.collection, singleMultipleChoiceCard.question.question, answers);
    this.editorType = "multipleChoice";
    this.isEditorVisible = true;
  }

  deleteMultipleChoiceCard(singleMultipleChoiceCard: MultipleChoiceQuestionResponse) {
    this.multipleChoiceService.deleteSingleQuestion(singleMultipleChoiceCard.question.id).subscribe(() => {
      this.loadCards()
    });
  }

  closeAllDialogs() {
    this.loadCards()
    this.isEditorVisible = false;
    this.isEditorVisible = false;
  }
}
