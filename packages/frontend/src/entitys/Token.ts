import {Timestamp} from "rxjs";

export class Token{
  id:number;
  token: string;
  createTimestamp: Timestamp<number>


  constructor(id: number, token: string, createTimestamp: Timestamp<number>) {
    this.id = id;
    this.token = token;
    this.createTimestamp = createTimestamp;
  }
}
