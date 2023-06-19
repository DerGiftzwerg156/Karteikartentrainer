import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoggerService} from "../services/logger.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() editCollection = new EventEmitter<number>();

  title = 'frontend';
  collectionCode: string = "";
  loggedIn: boolean = false;
  isLoginVisible: boolean = false;
  isRegistrationVisible: boolean = false;
  isCreateLoginVisible: boolean = false;

  constructor(private router: Router, private logger: LoggerService) {
  }

  showLogin() {
    this.isLoginVisible = true;
    this.isRegistrationVisible = false;
  }

  showRegistration() {
    this.isLoginVisible = false;
    this.isRegistrationVisible = true;
  }

  closeDialogs() {
    this.isLoginVisible = false;
    this.isRegistrationVisible = false;
  }

  isLoggedIn() {
    // TODO Wenn kein valider Token dann logout
    // return sessionStorage.getItem("token") !=null;
    return true;
  }

  searchCollectionCode() {
    //   TODO Search Collection implementieren
  }

  showCreateNewCollectionDialog() {
    this.isCreateLoginVisible = true;
  }

  closeCreateNewCollectionDialog() {
    this.isCreateLoginVisible = false;
  }

  logout() {
    this.router.navigate(['logout'])
  }

  showMyCollections() {
    this.router.navigate(['myCollections'])
  }
}
