import {Token} from "./Token";

export class User {
  id: number;
  token: Token;
  mail: string;
  password: string;
  verified: boolean;
  verificationCode: number;


  constructor(id: number, token: Token, mail: string, password: string, verified: boolean, verificationCode: number) {
    this.id = id;
    this.token = token;
    this.mail = mail;
    this.password = password;
    this.verified = verified;
    this.verificationCode = verificationCode;
  }
}
