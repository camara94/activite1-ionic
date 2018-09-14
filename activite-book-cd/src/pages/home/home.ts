import { Component } from '@angular/core';
import {BookListPage} from "../lists/book-list/book-list";
import {CdListPage} from "../lists/cd-list/cd-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bookPage = BookListPage;
  cdPage = CdListPage;
}
