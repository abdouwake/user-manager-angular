import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserApiService } from '../../services-api/user-api.service';
import { User } from '../models/user.model';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private UserApiService: UserApiService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  userListe: BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>([
    {
      id: -1,
      first_name: '',
      last_name: '',
      email: '',
      avatar: '',
    },
  ]);
  currentUser: BehaviorSubject<User> = new BehaviorSubject<User>({
    id: -1,
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });

  modalVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  createMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  currentPage: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  per_page: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  total_pages: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  //-----------------FORM VARIABLES ----------------------
  email: BehaviorSubject<string> = new BehaviorSubject<string>('');
  first_name: BehaviorSubject<string> = new BehaviorSubject<string>('');
  last_name: BehaviorSubject<string> = new BehaviorSubject<string>('');
  id: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  avatar: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setValues(
    email: string,
    first_name: string,
    last_name: string,
    id: number,
    avatar: string
  ) {
    this.email.next(email);
    this.first_name.next(first_name);
    this.last_name.next(last_name);
    this.id.next(id);
    this.avatar.next(avatar);
  }

  getUsers(page: number) {
    this.UserApiService.getAllUsersService(page).subscribe(
      (res: any) => {
        console.log(res);
        this.userListe.next(res.data);
        this.currentPage.next(res.page);
        this.per_page.next(res.per_page);
        this.total_pages.next(res.total_pages);
      },
      (error) => {
        Swal.fire('Erreur', error.error.error, error);
      }
    );
  }

  getSpecificUser(id: number) {
    this.UserApiService.getSpecificUser(id).subscribe(
      (res: any) => {
        console.log(res);
        this.currentUser.next(res.data);
      },
      (error) => {
        Swal.fire('Erreur', error.error.error, error);
      }
    );
  }

  addUser(user: User) {
    let usersCp = this.userListe.value.slice();
    usersCp.unshift(user);
    usersCp.pop();
    this.userListe.next(usersCp);
    this.modalService.dismissAll();
    this.setValues('', '', '', -1, '');
  }

  updateUser(user: User) {
    let usersCp = this.userListe.value.slice();
    let index = usersCp.findIndex((u) => u.id === user.id);
    usersCp[index] = user;
    this.userListe.next(usersCp);
    this.modalService.dismissAll();
    this.setValues('', '', '', -1, '');
  }
}
