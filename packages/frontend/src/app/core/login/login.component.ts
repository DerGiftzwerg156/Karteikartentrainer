import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() showRegisterComponent = new EventEmitter<boolean>();

  @Output() closeDialog = new EventEmitter<boolean>();

  mail: string = "";
  password: string = "";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
  }

}
