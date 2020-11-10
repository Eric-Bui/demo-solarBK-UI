import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import * as $ from 'jquery';
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
    private router: Router
  ) {}

  loginForm: FormGroup;

  ngOnInit(): void {
    this.validateLogin();
  }

  validateLogin() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.maxLength(75)],
      ],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onLogin() {
    const username = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    if (this.loginForm.valid) {
      this.loginService.onLogin(username, password).subscribe(
        (data) => console.log(data),
        (err) => {
          this.error = err.error;
          $(".note-message").addClass("error");
          setTimeout(() => {
            $(".note-message").removeClass("error");
          }, 3000);
        }
      );
    }
  }

  adminLogin() {
    console.log(window.location.href);
    // const adminURI = "http://localhost:8080/en/admin-redirect",
    const adminURL = `${window.location.href}/en/admin-redirect`,
    appClientID = 2,
    scope = "read_profile"

    window.location.href = `https://icms.solarbk.vn/oauth2/authorize/?redirect_uri=${adminURL}&scope=${scope}&response_type=code&client_id=${appClientID}`;


  }
}
