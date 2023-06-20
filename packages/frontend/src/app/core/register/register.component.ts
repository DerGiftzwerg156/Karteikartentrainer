import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {LoggerService} from "../../../services/logger.service";
import {UserService} from "../../../services/user.service";
import {User} from "../../../entitys/User";
import {Token} from "../../../entitys/Token";
import {Timestamp} from "rxjs";
import {LoginRequest} from "../../../requests/LoginRequest";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() showLoginComponent = new EventEmitter<boolean>();

  @Output() closeDialog = new EventEmitter<boolean>();

  password: string = "";
  mail: string = "";
  passwordConfirm: string = "";

  constructor(private router: Router, private logger: LoggerService, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  register() {
    if (this.comparePasswords()) {
      this.userService.createNewUser(new LoginRequest(this.mail, this.password)).subscribe(res => {
        this.closeDialog.emit(true);
        this.logger.showSuccess("Sie wurden erfolgreich registriert, bitte verifizieren sie sich als nächstes!")
      });
    }
  }

  comparePasswords() {
    if (this.password === this.passwordConfirm) {
      return true;
    } else {
      this.logger.showError("Die Passwörter stimmern nicht überein.");
      return false;
    }
  }

}
