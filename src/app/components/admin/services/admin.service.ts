import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  API: string = '/swhapi/';

  constructor(private http: HttpClient) { }

  getListProject() {
    const access_token = localStorage.getItem("accessTokAdmin");
    const id_admin = localStorage.getItem("id_admin");
    const username_admin = localStorage.getItem("username_admin")
    return this.http.post(this.API + 'status-total', {
      numberItems: 30,
      currentPage : 1,
      id: id_admin,
      selectedType : 'all',
      selectedStatus: 'all'
    }, 
    { headers: { authorization: access_token }}
    )
  }

  getInfoProject() {
     
  }
}
