import { Component, OnInit, SimpleChanges } from '@angular/core';
import { LoginService } from 'src/app/core/public/services/login.service';
import { SharedService } from 'src/app/core/public/services/shared.service';
import { SignInService } from 'src/app/core/public/services/sign-in.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent implements OnInit {
  constructor(
    private SignInService: SignInService,
    private SharedService: SharedService,
    private loginService: LoginService
  ) {}

  setCanSubscribe(): void {
    this.SignInService.checkSubscribe(
      this.username,
      this.password,
      this.passwordConf
    );
  }

  username: string = '';
  password: string = '';
  passwordConf: string = '';
  patternEmail: string = '';
  canSubscribe: boolean = false;

  checkPassword() {
    this.SignInService.checkPassword(this.password);
  }

  ngOnInit(): void {
    this.SignInService.username.subscribe(
      (username) => (this.username = username)
    );

    this.SignInService.password.subscribe(
      (password) => (this.password = password)
    );

    this.SignInService.passwordConf.subscribe(
      (passwordConf) => (this.passwordConf = passwordConf)
    );

    this.SignInService.canSubscribe.subscribe(
      (canSubscribe) => (this.canSubscribe = canSubscribe)
    );

    this.patternEmail = this.SharedService.patternEmail;
  }

  onClickRegister() {
    this.loginService.registerWithRedirect(this.username, this.password);
  }
}
