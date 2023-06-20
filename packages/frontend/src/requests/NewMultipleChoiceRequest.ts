import {Collection} from "../entitys/Collection";
import {MultipleChoiceQuestion} from "../entitys/MultipleChoiceQuestion";
import {MultipleChoiceAnswer} from "../entitys/MultipleChoiceAnswer";
import {MultipleChoiceAnswerPlan} from "../entitys/MultipleChoiceAnswerPlan";

export class NewMultipleChoiceRequest {
  collection: Collection;
  question: string;
  answers: MultipleChoiceAnswerPlan[];

  constructor(collection: Collection, question: string, answers: MultipleChoiceAnswerPlan[]) {
    this.collection = collection;
    this.question = question;
    this.answers = answers;
  }
}
