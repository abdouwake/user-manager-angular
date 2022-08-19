import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  elements = [
    { picto: 'home' },
    { picto: 'supervisor_account' },
    { picto: 'notifications' },
    { picto: 'comment' },
    { picto: 'settings' },
    { picto: 'restore_from_trash' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
