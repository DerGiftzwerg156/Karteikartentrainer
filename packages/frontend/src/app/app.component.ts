import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoggerService} from "../services/logger.service";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() editCollection = new EventEmitter<number>();

  title = 'Karteikartentrainer';
  collectionCode: string = "";
  isLoginVisible: boolean = false;
  isRegistrationVisible: boolean = false;
  isCreateLoginVisible: boolean = false;
  forgotPassword: boolean = false;

  constructor(private router: Router, private logger: LoggerService, private userService: UserService) {
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
    this.forgotPassword = false;
  }

  isLoggedIn() {
    // TODO Wenn kein valider Token dann logout
    // if(sessionStorage.getItem("token")){
    //   return true;
    // }else {
    //   // this.userService.logout()
    //   this.logger.showError("Bitte erneut anmelden")
    //   return false;
    // }
    return sessionStorage.getItem("token") != null;
  }

  searchCollectionCode() {
    let link = "learnMode/" + this.collectionCode
    this.router.navigate([link])
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
