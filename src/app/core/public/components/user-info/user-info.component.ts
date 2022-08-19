import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  user: User = {
    id: -1,
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
