import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {ActivateAccountRequest} from "../../../requests/ActivateAccountRequest";
import {LoggerService} from "../../../services/logger.service";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  mail: string = "";
  // @ts-ignore
  verificationCode: number;

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute, private logger: LoggerService) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const mail = routeParams.get('mail')!;
    const verifyCode = Number(routeParams.get('verifyCode'));
    this.mail = mail;
    this.verificationCode = verifyCode;
    // this.verify(mail,verifyCode);
  }

  verify() {
    this.userService.verifyAccount(new ActivateAccountRequest(this.mail, this.verificationCode)).subscribe(res => {
      if (res) {
        this.router.navigate(['']);
        this.logger.showSuccess("Account wurde erfolgreich Verifiziert!")
      } else {
        this.logger.showError("Es ist ein Fehler aufgetreten, bitte versuchen sie es erneut oder wenden sie sich an den Admin!")
      }
    })
  }
}
