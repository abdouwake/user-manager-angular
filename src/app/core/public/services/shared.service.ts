import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  patternEmail: string = '^[^ ]+@[^ ]+\\.[a-z]{2,6}$';

  logOut() {
    localStorage.removeItem('isUserLoggedIn');
  }
  constructor() {}
}
