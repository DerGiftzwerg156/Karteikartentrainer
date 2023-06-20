import {Injectable} from '@angular/core';
import {standardURL} from "../global";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Collection} from "../entitys/Collection";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  standardUrl = standardURL + "/collections"

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

  createNewCollection(collection: Collection) {
    return  this.http.post<Collection>(this.standardUrl + "/new", collection, this.createHttpHeaders());
  }

  getCollectionByAccessKey(accessKey: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `${accessKey}`,
        'Content-Type': 'application/json'
      })
    };
    return  this.http.get<Collection>(this.standardUrl + "/getByAccessKey", httpOptions);
  }

  getAllCollectionsByUser() {
    return  this.http.get<Collection[]>(this.standardUrl + "/getAllByUser", this.createHttpHeaders())
  }

  deleteCollection(collection: Collection) {
    return this.http.post(this.standardUrl + "/delete", collection, this.createHttpHeaders());
  }
}
