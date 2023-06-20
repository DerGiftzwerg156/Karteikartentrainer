export class MultipleChoiceAnswerPlan {
  answer:string;
  isRight:boolean;

  constructor(answer: string, isRight: boolean) {
    this.answer = answer;
    this.isRight = isRight;
  }
}
