import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
const options = {
  headers: new HttpHeaders({ Accept: "application/json" }),
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API : string = '/swhapi/login_auth';

  constructor(private http: HttpClient) { }

  onLogin(username, password) {
    return this.http.post(this.API, { username, password });
  }

}
