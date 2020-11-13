import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Store } from '@ngrx/store';
// import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: any;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private store: Store
  ) {}

  loginForm: FormGroup;

  ngOnInit(): void {
    this.validateLogin();
  }

  validateLogin() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.maxLength(75)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onLogin() {
    this.router.navigate(["/swh/list-project"]);
    // const username = this.loginForm.value.email;
    // const password = this.loginForm.value.password;
    // if (this.loginForm.valid) {
    //   $('#btn_login').children('#login').hide();
    //   $('#btn_login').children('#icon_loading').show();
    //   this.loginService.onLogin(username, password).subscribe(
    //     (data) => {
    //       this.router.navigate(["/admin/homepage"]);
    //     },
    //     (err) => {
    //       this.error = err.error;
    //       $('#btn_login').children('#login').show();
    //       $('#btn_login').children('#icon_loading').hide();
    //       $('.message-error').addClass('error');
    //       setTimeout(() => {
    //         $('.message-error').removeClass('error');
    //       }, 3000);
    //     }
    //   );
    // }
  }

  adminLogin() {
    const adminURL = `${window.location.href}admin/homepage`,
      appClientID = 2,
      scope = 'read_profile';

    window.location.href = `https://icms.solarbk.vn/oauth2/authorize/?redirect_uri=${adminURL}&scope=${scope}&response_type=code&client_id=${appClientID}`;
  }
}
