import {Injectable} from '@angular/core';
import {standardURL} from "../global";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NewMultipleChoiceRequest} from "../requests/NewMultipleChoiceRequest";
import {MultipleChoiceQuestionResponse} from "../responses/MultipleChoiceQuestionResponse";

@Injectable({
  providedIn: 'root'
})
export class MultipleChoiceService {

  standardUrl = standardURL + "/multipleChoice"

  constructor(private http: HttpClient) {
  }

  createHttpHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `${sessionStorage.getItem("token")}`,
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }

  createNewMultipleChoiceQuestion(newMultipleChoiceRequest: NewMultipleChoiceRequest) {
    return this.http.post<boolean>(this.standardUrl + "/newQuestion", newMultipleChoiceRequest, this.createHttpHeaders());
  }

  getAllMultipleChoiceByCollection(collectionId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `${collectionId}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<MultipleChoiceQuestionResponse[]>(this.standardUrl + "/getByCollection", httpOptions);
  }

  deleteSingleQuestion(questionId: number) {
    return this.http.post(this.standardUrl + "/deleteSingleQuestion", questionId, this.createHttpHeaders());
  }
}
