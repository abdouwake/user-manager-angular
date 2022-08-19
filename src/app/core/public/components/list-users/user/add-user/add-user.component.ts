import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ModalService } from 'src/app/core/public/services/modal.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/core/public/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  constructor(
    private ModalService: ModalService,
    private modalService: NgbModal,
    private userService: UserService
  ) {}

  closeModal(event: Event) {
    this.modalService.dismissAll();
    event.preventDefault();
  }

  title: string = '';
  createMode: boolean = false;

  email: string = '';
  first_name: string = '';
  last_name: string = '';
  avatar: string = '';
  id: number = -1;

  onClickAdd(event: Event) {
    this.userService.addUser({
      id: Date.now(),
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      avatar: 'https://i.pravatar.cc/300',
    });
    event.preventDefault();
  }

  onClickUpdate(event: Event) {
    this.userService.updateUser({
      id: this.id,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      avatar: this.avatar,
    });
    event.preventDefault();
  }

  ngOnInit(): void {
    this.ModalService.titleModal.subscribe((title) => (this.title = title));
    this.ModalService.createMode.subscribe(
      (createMode) => (this.createMode = createMode)
    );

    this.userService.email.subscribe((email) => (this.email = email));
    this.userService.first_name.subscribe(
      (first_name) => (this.first_name = first_name)
    );
    this.userService.last_name.subscribe(
      (last_name) => (this.last_name = last_name)
    );
    this.userService.avatar.subscribe((avatar) => (this.avatar = avatar));
    this.userService.id.subscribe((id) => (this.id = id));
  }
}
