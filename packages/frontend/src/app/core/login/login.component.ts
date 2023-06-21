import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {LoginRequest} from "../../../requests/LoginRequest";
import {LoggerService} from "../../../services/logger.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() showRegisterComponent = new EventEmitter<boolean>();

  @Output() closeDialog = new EventEmitter<boolean>();

  @Output() forgotPassword: EventEmitter<boolean> = new EventEmitter<boolean>();

  mail: string = "";
  password: string = "";

  constructor(private router: Router, private userService: UserService, private logger: LoggerService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.userService.loginUser(new LoginRequest(this.mail, this.password)).subscribe(res => {
      sessionStorage.setItem("user", JSON.stringify(res));
      sessionStorage.setItem("token", res.token.id.toString());
      this.mail = "";
      this.password = "";
      this.closeDialog.emit(true);
      this.logger.showSuccess("Sie wurden erfolgreich angemeldet!");
    }, (error) => {
      this.logger.showError("Falsches Passwort oder Benutzername!");
    });
  }

}
