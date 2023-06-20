import {Injectable} from '@angular/core';
import {standardURL} from "../global";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../entitys/User";
import {UpdatePasswordRequest} from "../requests/UpdatePasswordRequest";
import {LoginRequest} from "../requests/LoginRequest";
import {ActivateAccountRequest} from "../requests/ActivateAccountRequest";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  standardUrl = standardURL + "/user"

  constructor(private http: HttpClient) {
  }

  private createHttpHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `${sessionStorage.getItem("token")}`,
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }

  createNewUser(user: LoginRequest) {
    return this.http.post<User>(this.standardUrl + "/createNew", user);
  }

  updatePassword(updatePasswordRequest: UpdatePasswordRequest) {
    return this.http.post(this.standardUrl + "/updatePassword", updatePasswordRequest, this.createHttpHeaders());
  }

  deleteUser() {
    this.http.delete(this.standardUrl + "/deleteUser", this.createHttpHeaders()).subscribe();
  }

  getUserByToken() {
    return this.http.get<User>(this.standardUrl + "/getUserByToken", this.createHttpHeaders());
  }

  loginUser(loginRequest: LoginRequest) {
    return this.http.post<User>(this.standardUrl + "/login", loginRequest);
  }

  verifyAccount(activateAccountRequest: ActivateAccountRequest) {
    return this.http.post<boolean>(this.standardUrl + "/verifyAccount", activateAccountRequest);
  }

  logout() {
    this.http.get(this.standardUrl + "/logout", this.createHttpHeaders()).subscribe();
  }
}
