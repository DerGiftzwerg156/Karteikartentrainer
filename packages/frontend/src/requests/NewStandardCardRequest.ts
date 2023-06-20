import {Collection} from "../entitys/Collection";
import {StandardCard} from "../entitys/StandardCard";

export class NewStandardCardRequest {
  collection: Collection;
  question: string;
  answer: string;


  constructor(collection: Collection, question: string, answer: string) {
    this.collection = collection;
    this.question = question;
    this.answer = answer;
  }
}
