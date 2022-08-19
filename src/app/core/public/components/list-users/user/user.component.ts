import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../models/user.model';
import { ModalService } from '../../../services/modal.service';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  @Output() updateClicked = new EventEmitter<{ type: string; user: User }>();

  ngOnInit(): void {}

  @Input() index: number = 0;
  @Input() user: User = {
    id: -1,
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  };

  onClickUpdate(user: User, event: Event) {
    this.updateClicked.emit({ type: 'update', user: user });
    event.preventDefault();
  }

  open(type: string, user: User) {
    if (type === 'update') {
      this.user = user;
    }
    this.modalService.open(AddUserComponent, type, this.user);
  }
}
