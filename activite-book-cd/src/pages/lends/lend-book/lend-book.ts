import {Component, OnInit} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {LivresCDServices} from "../../../services/livresCD.services";
import {Book} from "../../../models/Book";

@Component({
  selector:'page-lend-book',
  templateUrl:'lend-book.html'
})

export class LendBookPage implements OnInit{
  book:Book;
  i:number;
  constructor(private navParams:NavParams,private viewCtrl:ViewController,private livresCDService:LivresCDServices){}

  ngOnInit(){
    this.i = this.navParams.get('i');
    this.book = this.livresCDService.booksList[this.i];
  }
  onRP(){
    this.livresCDService.onRendrePreter(this.i);
  }
  onCloseModal(){
    this.viewCtrl.dismiss();
  }

}
