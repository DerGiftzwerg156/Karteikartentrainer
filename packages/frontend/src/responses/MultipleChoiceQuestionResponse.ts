import {MultipleChoiceQuestion} from "../entitys/MultipleChoiceQuestion";
import {MultipleChoiceAnswer} from "../entitys/MultipleChoiceAnswer";
import {CardType} from "../entitys/CardType";

export class MultipleChoiceQuestionResponse {
  cardType:CardType;
  question: MultipleChoiceQuestion;
  answers: MultipleChoiceAnswer[];


  constructor(cardType: CardType, question: MultipleChoiceQuestion, answers: MultipleChoiceAnswer[]) {
    this.cardType = cardType;
    this.question = question;
    this.answers = answers;
  }
}
