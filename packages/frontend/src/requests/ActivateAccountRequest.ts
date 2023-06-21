export class ActivateAccountRequest {
  mail: string;
  activationCode: number;

  constructor(mail: string, activationCode: number) {
    this.mail = mail;
    this.activationCode = activationCode;
  }
}
