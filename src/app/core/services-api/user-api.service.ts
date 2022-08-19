import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  url = 'https://reqres.in/api/';
  constructor(private http: HttpClient, private router: Router) {}

  getAllUsersService(page: number) {
    let route = 'users?page=';
    return this.http.get(this.url + route + page);
  }

  getSpecificUser(id: number) {
    let route = 'users/';
    return this.http.get(this.url + route + id);
  }
}
