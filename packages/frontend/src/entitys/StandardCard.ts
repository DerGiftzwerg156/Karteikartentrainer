import {Collection} from "./Collection";
import {CardType} from "./CardType";

export class StandardCard {
  id: number | undefined;
  collection: Collection;
  cardType: CardType;
  question: string;
  answer: string;


  constructor(id: number | undefined, collection: Collection, cardType: CardType, question: string, answer: string) {
    this.id = id;
    this.collection = collection;
    this.cardType = cardType;
    this.question = question;
    this.answer = answer;
  }


}
