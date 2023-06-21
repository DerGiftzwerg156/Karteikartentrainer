import {MultipleChoiceQuestion} from "./MultipleChoiceQuestion";

export class MultipleChoiceAnswer {
  id: number;
  multipleChoiceQuestion: MultipleChoiceQuestion;
  answer: string;
  correct: boolean;

  constructor(id: number, multipleChoiceQuestion: MultipleChoiceQuestion, answer: string, correct: boolean) {
    this.id = id;
    this.multipleChoiceQuestion = multipleChoiceQuestion;
    this.answer = answer;
    this.correct = correct;
  }
}
