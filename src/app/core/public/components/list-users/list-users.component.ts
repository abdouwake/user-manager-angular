import { Component, ViewContainerRef, ElementRef, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { ModalService } from '../../services/modal.service';
import { UserService } from '../../services/user.service';
import { AddUserComponent } from './user/add-user/add-user.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  user: User = {
    id: -1,
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  };

  open(item: { type: string; user: User }) {
    if (item.type === 'update') {
      this.user = item.user;
    }
    this.modalService.open(AddUserComponent, item.type, this.user);
  }

  constructor(
    private userService: UserService,
    private modalService: ModalService
  ) {}
  statCards = [
    {
      statName: 'Total Actifs',
      statValue: '1456',
      pictoClass: 'timeline',
      variation: '1.10%',
      appreciation: 'fa-arrow-down',
    },
    {
      statName: 'Total Absents',
      statValue: '954',
      pictoClass: 'bar_chart',
      variation: '2.10%',
      appreciation: 'fa-arrow-up',
    },
    {
      statName: 'Total Nouveaux',
      statValue: '+25',
      pictoClass: 'insert_chart_outlined',
      variation: '0.10%',
      appreciation: 'fa-arrow-down',
    },
    {
      statName: 'Total Suspendu',
      statValue: '-879',
      pictoClass: 'bubble_chart',
      variation: '10.10%',
      appreciation: 'fa-arrow-up',
    },
  ];

  userListe: Array<User> = [
    {
      id: -1,
      first_name: '',
      last_name: '',
      email: '',
      avatar: '',
    },
  ];

  currentPage: number = 0;
  per_page: number = 0;
  total: number = 0;
  total_pages: number = 0;

  ngOnInit(): void {
    this.userService.userListe.subscribe(
      (userListe) => (this.userListe = userListe)
    );

    this.userService.getUsers(0);
  }
}
