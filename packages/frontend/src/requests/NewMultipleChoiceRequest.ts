import {Collection} from "../entitys/Collection";
import {MultipleChoiceQuestion} from "../entitys/MultipleChoiceQuestion";
import {MultipleChoiceAnswer} from "../entitys/MultipleChoiceAnswer";

export class NewMultipleChoiceRequest {
  collection: Collection;
  multipleChoiceQuestion: MultipleChoiceQuestion;
  multipleChoiceAnswer: MultipleChoiceAnswer[];


  constructor(collection: Collection, multipleChoiceQuestion: MultipleChoiceQuestion, multipleChoiceAnswer: MultipleChoiceAnswer[]) {
    this.collection = collection;
    this.multipleChoiceQuestion = multipleChoiceQuestion;
    this.multipleChoiceAnswer = multipleChoiceAnswer;
  }
}
