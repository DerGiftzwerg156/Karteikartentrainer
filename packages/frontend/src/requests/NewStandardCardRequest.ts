import {Collection} from "../entitys/Collection";
import {StandardCard} from "../entitys/StandardCard";

export class NewStandardCardRequest{
  collection:Collection;
  standardCard:StandardCard;


  constructor(collection: Collection, standardCard: StandardCard) {
    this.collection = collection;
    this.standardCard = standardCard;
  }
}
