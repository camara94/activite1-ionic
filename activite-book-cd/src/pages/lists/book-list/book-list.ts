import {Component} from "@angular/core";
import {MenuController, ModalController, NavController} from "ionic-angular";
import {LendBookPage} from "../../lends/lend-book/lend-book";
import {Book} from "../../../models/Book";
import {LivresCDServices} from "../../../services/livresCD.services";

@Component({
  selector:'page-book-list',
  templateUrl:'book-list.html'
})

export class BookListPage{

  booksList:Book[];

  constructor(private modalCtrl:ModalController,private livresCDServices:LivresCDServices,private menuCtrl:MenuController){}

  ionViewWillEnter(){
    this.booksList = this.livresCDServices.booksList.slice();
  }

  onLoadBook(i:number){
   let modal = this.modalCtrl.create(LendBookPage,{i:i});
   modal.present();
  }
  onToggleMenu(){
    this.menuCtrl.open();
  }
}
