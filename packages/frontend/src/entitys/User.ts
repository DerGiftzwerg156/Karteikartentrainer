import {Token} from "./Token";

export class User {
  id: number|undefined;
  token: Token|undefined;
  mail: string;
  password: string;
  verified: boolean;
  verificationCode: number|undefined;


  constructor(id: number|undefined, token: Token|undefined, mail: string, password: string, verified: boolean, verificationCode: number|undefined) {
    this.id = id;
    this.token = token;
    this.mail = mail;
    this.password = password;
    this.verified = verified;
    this.verificationCode = verificationCode;
  }
}
