import {Collection} from "./Collection";
import {CardType} from "./CardType";

export class MultipleChoiceQuestion {
  id: number | undefined;
  collection: Collection;
  cardType: CardType;
  question: string;


  constructor(id: number | undefined, collection: Collection, cardType: CardType, question: string) {
    this.id = id;
    this.collection = collection;
    this.cardType = cardType;
    this.question = question;
  }
}
