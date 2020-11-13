import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  subscription: any;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getToken();
    
  }

  getToken() {
    this.subscription = this.activatedRoute.queryParams.subscribe(param => {
      localStorage.setItem('accessTokAdmin', param.auth_token)
      localStorage.setItem('id_admin', '2381')
      localStorage.setItem('username_admin', 'anhbui')
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
