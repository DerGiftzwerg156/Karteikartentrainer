import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoggerService} from "../services/logger.service";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {MegaMenuItem} from "primeng/api";

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
  menuItems: MegaMenuItem[] | undefined;
  tabMenuItems: MegaMenuItem[] = [
    {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ''},
    {label: 'Profil', icon: 'pi pi-fw pi-user',},
    {label: 'Abmelden', icon: 'pi pi-fw pi-sign-out', routerLink: '/logout'},
    {
      label: 'Neue Kartensammlung', icon: 'pi pi-fw pi-plus', command: () => {
        this.showCreateNewCollectionDialog();
      }
    },
    {
      label: 'Meine Kartensammlungen', icon: 'pi pi-fw pi-bars', command: () => {
        this.showMyCollections();
      }
    }
  ];
  standardTabMenuItems: MegaMenuItem[] = [
    {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ''},
    {
      label: 'Anmelden', icon: 'pi pi-fw pi-sign-in', command: () => {
        this.showLogin();
      }
    }
  ];
;

  constructor(private router: Router, private logger: LoggerService, private userService: UserService) {
    this.menuItems = this.standardTabMenuItems;
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
    this.isLoggedIn()
    this.isLoginVisible = false;
    this.isRegistrationVisible = false;
    this.forgotPassword = false;
  }

  isLoggedIn() {
    console.log("1")
    // TODO Wenn kein valider Token dann logout
    if (sessionStorage.getItem("token")) {
      this.menuItems = this.tabMenuItems;
      return true;
    } else {
      this.menuItems = this.standardTabMenuItems;
      this.userService.logout()
      this.logger.showError("Bitte erneut anmelden")
      return false;
    }
    // return sessionStorage.getItem("token") != null;
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
    this.menuItems=this.standardTabMenuItems;
    this.router.navigate(['logout'])
  }

  showMyCollections() {
    this.router.navigate(['myCollections'])
  }
}
