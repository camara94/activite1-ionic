import {Component} from "@angular/core";
import {BookListPage} from "../lists/book-list/book-list";
import {CdListPage} from "../lists/cd-list/cd-list";

@Component({
  selector:'page-tabs',
  templateUrl:'tabs.html'
})

export class TabsPage{
  bookListPage = BookListPage;
  cdListPage = CdListPage;
}
