export class MultipleChoiceAnswerDummy {
  answer: string;
  correct: boolean;
  userInput: boolean;

  constructor(answer: string, correct: boolean, userInput: boolean) {
    this.answer = answer;
    this.correct = correct;
    this.userInput = userInput;
  }
}
