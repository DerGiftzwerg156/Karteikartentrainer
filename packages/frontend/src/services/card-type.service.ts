import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {standardURL} from "../global";
import {CardType} from "../entitys/CardType";

@Injectable({
  providedIn: 'root'
})
export class CardTypeService {

  standardUrl = standardURL + "/cardType"

  constructor(private http: HttpClient) {
  }

  getAllCardTypes(){
    return this.http.get<CardType[]>(this.standardUrl+"/getAll")
  }

  getStandardCardType(){
    return this.http.get<CardType>(this.standardUrl+"/getStandard")
  }
  getMultipleChoiceCardType(){
    return this.http.get<CardType>(this.standardUrl+"/getMultipleChoice")
  }
}
