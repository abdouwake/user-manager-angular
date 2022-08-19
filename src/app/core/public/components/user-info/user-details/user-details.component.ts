import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: User = {
    id: -1,
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.currentUser.subscribe(
      (currentPage) => (this.user = currentPage)
    );
    this.userService.getSpecificUser(
      Number(this.activatedRoute.snapshot.paramMap.get('id'))
    );
  }
}
