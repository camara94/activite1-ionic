import {Component} from "@angular/core";
import {MenuController, ModalController} from "ionic-angular";
import {LendCdPage} from "../../lends/lend-cd/lend-cd";
import {CD} from "../../../models/CD";
import {LivresCDServices} from "../../../services/livresCD.services";

@Component({
  selector:'page-cd-list',
  templateUrl:'cd-list.html'
})

export class CdListPage{

  cdLists:CD[];
  constructor(private modalCtrl:ModalController,private livresCDServices:LivresCDServices,private menuCtrl:MenuController){

  }

  ionViewWillEnter(){
    this.cdLists = this.livresCDServices.cdLists.slice();
  }

  onLoadCd(i:number){
    let modal = this.modalCtrl.create(LendCdPage,{i:i});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }
}
