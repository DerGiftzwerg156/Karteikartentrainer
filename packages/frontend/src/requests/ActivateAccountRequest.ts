export class ActivateAccountRequest {
  mail: string;
  activationCode: string;

  constructor(mail: string, activationCode: string) {
    this.mail = mail;
    this.activationCode = activationCode;
  }
}
