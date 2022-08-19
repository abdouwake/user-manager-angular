import { Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(
    private modalService: NgbModal,
    private UserService: UserService
  ) {}

  ngOnInit(): void {}

  closeResult: BehaviorSubject<string> = new BehaviorSubject<string>('');
  modalOptions: NgbModalOptions = {};
  createMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  visible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  titleModal: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Add a user'
  );

  open(content: any, type: string, user: User) {
    if (type === 'add') {
      this.titleModal.next('Add a user');
      this.createMode.next(true);
    } else {
      this.titleModal.next('Update a user');
      this.UserService.setValues(
        user.email,
        user.first_name,
        user.last_name,
        user.id,
        user.avatar
      );
      this.createMode.next(false);
    }
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result: any) => {
          this.closeResult.next(`Closed with: ${result}`);
        },
        (reason: any) => {
          this.closeResult.next(`Dismissed ${this.getDismissReason(reason)}`);
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
