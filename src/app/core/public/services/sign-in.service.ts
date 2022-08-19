import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor() {}

  username: BehaviorSubject<string> = new BehaviorSubject<string>('');
  password: BehaviorSubject<string> = new BehaviorSubject<string>('');
  passwordConf: BehaviorSubject<string> = new BehaviorSubject<string>('');

  containsNb: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  containsUpper: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  passLength: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  canSubscribe: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  //Check if the user can subscribe (all infos are correct : username and password not null, password and its confirmation correct)
  checkSubscribe(username: string, password: string, passConf: string) {
    let usernamePasswordEmpty =
      username === '' || password === '' || passConf === '';
    let passwordConf = this.validatePassConfirm(password, passConf);
    let strenghtPass =
      this.containsNb.value &&
      this.containsUpper.value &&
      this.passLength.value;

    //si l'une de ces conditions est satisfaite, le bouton sera grisé
    this.canSubscribe.next(
      usernamePasswordEmpty || !passwordConf || !strenghtPass
    );
  }

  //check if password if strong enough
  checkPassword(password: string) {
    let response = this.validatePassStrength(password);
    this.containsNb.next(response['containsNumber']);
    this.containsUpper.next(response['containsUpper']);
    this.passLength.next(response['passLength']);
  }

  //check if password contains an uppercase
  checkUppercase(pass: string) {
    for (var i = 0; i < pass.length; i++) {
      if (
        pass.charAt(i) == pass.charAt(i).toUpperCase() &&
        pass.charAt(i).match(/[a-z]/i)
      ) {
        return true;
      }
    }
    return false;
  }

  //check if password contains a number
  containsNumberPass(pass: string) {
    return /\d/.test(pass);
  }

  //check if password has the required length
  validateLengthPassword(pass: string) {
    const MAX_SIZE = 8;
    return pass.length >= MAX_SIZE;
  }

  //check if the password respects the minimym security requirements
  validatePassStrength(password: string) {
    return {
      containsNumber: this.containsNumberPass(password),
      containsUpper: this.checkUppercase(password),
      passLength: this.validateLengthPassword(password),
    };
  }

  //check if the password is the same as the confirmed one
  validatePassConfirm(pass: string, conf: string) {
    return pass === conf;
  }
}
