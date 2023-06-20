import {Timestamp} from "rxjs";

export class Token {
  id: number;
  token: string;
  createTimestamp: Timestamp<number> | number|null


  constructor(id: number, token: string, createTimestamp: Timestamp<number> | number|null) {
    this.id = id;
    this.token = token;
    this.createTimestamp = createTimestamp;
  }
}
