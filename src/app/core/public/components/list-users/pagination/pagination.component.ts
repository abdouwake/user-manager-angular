import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  currentPage: number = 0;
  total_pages: number = 0;
  per_page: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.total_pages.subscribe(
      (total_pages) => (this.total_pages = total_pages)
    );

    this.userService.currentPage.subscribe(
      (currentPage) => (this.currentPage = currentPage)
    );

    this.userService.per_page.subscribe(
      (per_page) => (this.per_page = per_page)
    );
  }

  changePage(page: number) {
    this.userService.getUsers(page);
  }
}
