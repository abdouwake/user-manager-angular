import { Component, OnInit } from '@angular/core';
import { SignInService } from 'src/app/core/public/services/sign-in.service';

@Component({
  selector: 'app-strength-pass',
  templateUrl: './strength-pass.component.html',
  styleUrls: ['./strength-pass.component.css'],
})
export class StrengthPassComponent implements OnInit {
  containsNb: boolean = false;
  containsUpper: boolean = false;
  passLength: boolean = false;

  constructor(private SignInService: SignInService) {}

  ngOnInit(): void {
    this.SignInService.containsNb.subscribe(
      (containsNb) => (this.containsNb = containsNb)
    );
    this.SignInService.containsUpper.subscribe(
      (containsUpper) => (this.containsUpper = containsUpper)
    );
    this.SignInService.passLength.subscribe(
      (passLength) => (this.passLength = passLength)
    );
  }
}
