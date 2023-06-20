import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoggerService} from "../../../services/logger.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private logger: LoggerService, private userService: UserService) {
  }

  ngOnInit() {
    sessionStorage.clear();
    this.userService.logout();
    this.router.navigate(['']);
    this.logger.showInfo("Sie wurden erfolgreich abgemeldet!");
  }

}
