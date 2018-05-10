import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

const BAD_CREDENTIALS_RESPONSE_CODE = 400;
export let isUserLoggedIn = false;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  username: string;
  password: string;
  invalidCredentials = false;

  constructor(private loginService: LoginService,
              private router: Router) {
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['dashboard']);
    }

  }

  requestAccessToken() {
    this.loginService.requestAccessToken(this.username, this.password)
      .subscribe(
        data => {
          this.invalidCredentials = false;
          localStorage.setItem('access_token', data.access_token);
          isUserLoggedIn = true;
          this.redirectUser();
        },
        error => {
          if (error.status === BAD_CREDENTIALS_RESPONSE_CODE) {
            console.log(error);
            this.invalidCredentials = true;
          }
        });
  }

  redirectUser(): void {
    this.router.navigate(['dashboard']);
  }

}


