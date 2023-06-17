import {Injectable} from '@angular/core';
import {standardURL} from "../global";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StandardCard} from "../entitys/StandardCard";

@Injectable({
  providedIn: 'root'
})
export class StandardCardService {

  standardUrl = standardURL + "/standardCard"

  constructor(private http: HttpClient) {
  }

  getAllStandardCards(): Observable<StandardCard[]> {
    return this.http.get<StandardCard[]>(this.standardUrl + "/getAll")
  }
}
