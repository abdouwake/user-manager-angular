import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statcard',
  templateUrl: './statcard.component.html',
  styleUrls: ['./statcard.component.css'],
})
export class StatcardComponent implements OnInit {
  @Input() stat = {
    statName: '',
    statValue: '',
    pictoClass: '',
    variation: '',
    appreciation: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
