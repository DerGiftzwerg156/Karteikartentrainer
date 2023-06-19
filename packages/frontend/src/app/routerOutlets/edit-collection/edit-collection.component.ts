import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Collection} from "../../../entitys/Collection";
import {StandardCard} from "../../../entitys/StandardCard";
import {MultipleChoiceQuestionResponse} from "../../../responses/MultipleChoiceQuestionResponse";
import {User} from "../../../entitys/User";
import {Token} from "../../../entitys/Token";
import {CardType} from "../../../entitys/CardType";
import {MultipleChoiceQuestion} from "../../../entitys/MultipleChoiceQuestion";
import {MultipleChoiceAnswer} from "../../../entitys/MultipleChoiceAnswer";
import {DialogTemplates} from "primeng/dialog";

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

  testQuestion: MultipleChoiceQuestion

  isEditorVisible: boolean = false;
  editorType:string = "";

  // @ts-ignore
  selectedStandardCard: StandardCard;
  // @ts-ignore
  selectedMultipleChoiceCard: MultipleChoiceQuestionResponse;


  constructor(private route: ActivatedRoute) {
    this.collection = new Collection(1, new User(0, new Token(1, "abcde", 123), 'test@test.de', 'pw1234', true, 234), 'First Collection', '1 Dies ist nur eine Test Collection', 12345)
    this.testQuestion = new MultipleChoiceQuestion(1, this.collection, new CardType(1, "MultipleChoice", "Standard Frage Antwort"), 'Welche Aussage ist richtig?')//TODO Frage löschen
    this.standardCards = [
      new StandardCard(1, this.collection, new CardType(1, "Standard", "Standard Frage Antwort"), "Was ist 1+1?", "Die Antwort ist 2!"),
      new StandardCard(2, this.collection, new CardType(1, "Standard", "Standard Frage Antwort"), "Was ist 1+3?", "Die Antwort ist 4!")
    ];
    this.multipleChoiceQuestions = [
      new MultipleChoiceQuestionResponse(this.testQuestion, [new MultipleChoiceAnswer(1, this.testQuestion, "1+1 ist 3", false), new MultipleChoiceAnswer(2, this.testQuestion, '1+1 ist 2', true), new MultipleChoiceAnswer(1, this.testQuestion, "1+1 ist 4", false), new MultipleChoiceAnswer(1, this.testQuestion, "1+1 ist 7", false)]),
      new MultipleChoiceQuestionResponse(this.testQuestion, [new MultipleChoiceAnswer(1, this.testQuestion, "1+1 ist 3", false), new MultipleChoiceAnswer(2, this.testQuestion, '1+1 ist 2', true), new MultipleChoiceAnswer(1, this.testQuestion, "1+1 ist 4", false), new MultipleChoiceAnswer(1, this.testQuestion, "1+1 ist 7", false)]),
      new MultipleChoiceQuestionResponse(this.testQuestion, [new MultipleChoiceAnswer(1, this.testQuestion, "1+1 ist 3", false), new MultipleChoiceAnswer(2, this.testQuestion, '1+1 ist 2', true), new MultipleChoiceAnswer(1, this.testQuestion, "1+1 ist 4", false), new MultipleChoiceAnswer(1, this.testQuestion, "1+1 ist 7", false)])
    ];
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const collectionId = Number(routeParams.get('collectionId'))
    //   TODO die Collection im Backend abfragen
  }

  editStandardCard(singleStandardCard: StandardCard) {
    this.selectedStandardCard = singleStandardCard;
    this.editorType = "standard";
    this.isEditorVisible = true;
  }

  deleteStandardCard(singleStandardCard: StandardCard) {
    //   TODO implementieren
  }

  createNewMultipleChoiceCard() {
    let question = new MultipleChoiceQuestion(0, this.collection, this.cardTypes[0], "");
    let answers: MultipleChoiceAnswer[] = [
      new MultipleChoiceAnswer(0, question, "", true)
    ];
    this.selectedMultipleChoiceCard = new MultipleChoiceQuestionResponse(question, answers);
    this.editorType = "multipleChoice";
    this.isEditorVisible = true;
  }

  createNewStandardCard() {
    this.selectedStandardCard = new StandardCard(0, this.collection, this.cardTypes[0], "", "");
    this.isEditorVisible = true;
    this.editorType = "standard";
  }

  editMultipleChoiceCard(singleMultipleChoiceCard: MultipleChoiceQuestionResponse) {
    this.selectedMultipleChoiceCard = singleMultipleChoiceCard;
    this.editorType = "multipleChoice";
    this.isEditorVisible = true;
  }

  deleteMultipleChoiceCard(singleMultipleChoiceCard: MultipleChoiceQuestionResponse) {
    //   TODO implementieren
  }

  closeAllDialogs() {
    this.isEditorVisible = false;
    this.isEditorVisible = false;
  }
}
