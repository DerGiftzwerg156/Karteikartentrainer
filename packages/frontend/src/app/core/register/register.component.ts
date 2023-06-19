import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {LoggerService} from "../../../services/logger.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  @Output() showLoginComponent = new EventEmitter<boolean>();

  @Output() closeDialog = new EventEmitter<boolean>();

  password: string = "";
  mail: string = "";
  passwordConfirm: string = "";

  constructor(private router: Router, private logger:LoggerService) {
  }

  ngOnInit(): void {
  }

  register() {
    if (this.comparePasswords()) {
    //   TODO Register implementieren
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
