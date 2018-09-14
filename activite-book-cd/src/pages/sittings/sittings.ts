import { Component } from '@angular/core';
import {MenuController} from "ionic-angular";

@Component({
  selector: 'page-sittings',
  templateUrl: 'sittings.html',
})
export class SittingsPage {

  constructor(private menuCtrl:MenuController){}
  onToggleMenu(){
    this.menuCtrl.open();
  }
}
