import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private LoginService: LoginService,
    private loginService: LoginService
  ) {}

  isConnected() {
    return this.loginService.isConnected();
  }
  ngOnInit(): void {}

  logOut() {
    this.LoginService.logOut();
  }
}