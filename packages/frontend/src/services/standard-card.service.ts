import {Injectable} from '@angular/core';
import {standardURL} from "../global";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StandardCard} from "../entitys/StandardCard";
import {NewStandardCardRequest} from "../requests/NewStandardCardRequest";

@Injectable({
  providedIn: 'root'
})
export class StandardCardService {

  standardUrl = standardURL + "/standardCard"

  constructor(private http: HttpClient) {
  }

  private createHttpHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `${sessionStorage.getItem("token")}`,
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }

  createNewStandardCard(newStandardCardRequest: NewStandardCardRequest) {
    return this.http.post<StandardCard>(this.standardUrl + "/createNew", newStandardCardRequest, this.createHttpHeaders())
  }

  deleteStandardCard(id: number) {
    return this.http.post(this.standardUrl + "/delete", id, this.createHttpHeaders());
  }

  getAllStandardCardsByCollection(collectionId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `${collectionId}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<StandardCard[]>(this.standardUrl + "/getAllByCollection", httpOptions);
  }
}
