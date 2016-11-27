import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {ViewController} from 'ionic-angular';
@Component({
  selector: 'page-remind',
  templateUrl: 'page-remind.html'
})
export class RemindPage implements OnInit {

  constructor(private viewCtrl: ViewController) {

  }

  ngOnInit(): void {

  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
