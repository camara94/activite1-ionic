import {Component, OnInit} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {CD} from "../../../models/CD";
import {LivresCDServices} from "../../../services/livresCD.services";

@Component({
  selector:'page-lend-cd',
  templateUrl:'lend-cd.html'
})

export class LendCdPage implements OnInit{
  cd:CD;
  i:number;

  constructor(private navParams:NavParams,private viewCtrl:ViewController,private livresCDServices:LivresCDServices){}

  ngOnInit(){
    this.i = this.navParams.get('i');
    this.cd = this.livresCDServices.cdLists[this.i];
  }

  onRP(){
    this.livresCDServices.onRendrePreter(this.i);
  }

  onCloseModal(){
    this.viewCtrl.dismiss();
  }
}
