import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/public/services/login.service';
import { SharedService } from 'src/app/core/public/services/shared.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [
    './login-form.component.css',
    '../../../../../../app.component.css',
  ],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private SharedService: SharedService
  ) {}

  username: string = '';
  password: string = '';
  patternEmail: string = '';

  ngOnInit(): void {
    this.loginService.username.subscribe(
      (username) => (this.username = username)
    );

    this.loginService.password.subscribe(
      (password) => (this.password = password)
    );

    this.patternEmail = this.SharedService.patternEmail;
  }

  onClickLogin() {
    this.loginService.loginWithRedirect(this.username, this.password);
  }
}
