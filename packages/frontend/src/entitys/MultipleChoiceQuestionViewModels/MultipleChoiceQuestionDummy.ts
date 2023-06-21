import {MultipleChoiceAnswerDummy} from "./MultipleChoiceAnswerDummy";


export class MultipleChoiceQuestionDummy {
  question: string;
  answers:MultipleChoiceAnswerDummy[];

  constructor(question: string, answers: MultipleChoiceAnswerDummy[]) {
    this.question = question;
    this.answers = answers;
  }
}
