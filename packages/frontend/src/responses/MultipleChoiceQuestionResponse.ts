import {MultipleChoiceQuestion} from "../entitys/MultipleChoiceQuestion";
import {MultipleChoiceAnswer} from "../entitys/MultipleChoiceAnswer";

export class MultipleChoiceQuestionResponse {
  question: MultipleChoiceQuestion;
  answers: MultipleChoiceAnswer[];


  constructor(question: MultipleChoiceQuestion, answers: MultipleChoiceAnswer[]) {
    this.question = question;
    this.answers = answers;
  }
}
