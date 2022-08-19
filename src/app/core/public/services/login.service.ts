import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthApiService } from '../../services-api/auth-api.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private authApi: AuthApiService, private router: Router) {}

  username: BehaviorSubject<string> = new BehaviorSubject<string>('');
  password: BehaviorSubject<string> = new BehaviorSubject<string>('');

  isConnected() {
    return Boolean(sessionStorage.getItem('isConnected'));
  }
  loginWithRedirect(username: string, password: string) {
    this.authApi.login(username, password).subscribe(
      (res: any) => {
        sessionStorage.setItem('isConnected', 'true');
        sessionStorage.setItem('token', String(res.token));
        this.router.navigate(['list-users']);
      },
      (error) => {
        Swal.fire('Erreur', error.error.error, error);
        sessionStorage.setItem('isConnected', 'false');
        sessionStorage.setItem('token', '');
      }
    );
  }

  registerWithRedirect(username: string, password: string) {
    this.authApi.register(username, password).subscribe(
      (res: any) => {
        sessionStorage.setItem('isConnected', 'true');
        sessionStorage.setItem('token', String(res.token));
        this.router.navigate(['list-users']);
      },
      (error) => {
        Swal.fire('Erreur', error.error.error, error);
        sessionStorage.setItem('isConnected', 'false');
        sessionStorage.setItem('token', '');
      }
    );
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
