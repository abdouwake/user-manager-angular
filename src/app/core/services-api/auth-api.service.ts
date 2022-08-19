import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  url = 'https://reqres.in/api/';
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    let route = 'login';
    let data = {
      email: username,
      password: password,
    };
    return this.http.post(this.url + route, data);
  }

  register(username: string, password: string) {
    let route = 'register';
    let data = {
      email: username,
      password: password,
    };
    return this.http.post(this.url + route, data);
  }
}
