export class StandardCard {
  standardCardId: number;
  question: string;
  answer: string;

  constructor(standardCardId: number, question: string, answer: string) {
    this.standardCardId = standardCardId;
    this.question = question;
    this.answer = answer;
  }
}
