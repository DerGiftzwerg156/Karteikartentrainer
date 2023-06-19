import {MultipleChoiceQuestion} from "./MultipleChoiceQuestion";

export class MultipleChoiceAnswer {
  id: number;
  multipleChoiceQuestion: MultipleChoiceQuestion;
  answer: string;
  isRight: boolean;

  constructor(id: number, multipleChoiceQuestion: MultipleChoiceQuestion, answer: string, isRight: boolean) {
    this.id = id;
    this.multipleChoiceQuestion = multipleChoiceQuestion;
    this.answer = answer;
    this.isRight = isRight;
  }
}
