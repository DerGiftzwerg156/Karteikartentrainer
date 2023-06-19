import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoggerService} from "../../../services/logger.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  constructor(private router:Router, private logger:LoggerService) {
  }

  ngOnInit() {
    sessionStorage.clear();
    // TODO: Login aufruf implementieren
    this.router.navigate([''])
    this.logger.showInfo("Sie wurden erfolgreich abgemeldet!")
  }

}
