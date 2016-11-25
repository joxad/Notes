import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {ViewController} from 'ionic-angular';
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
}) export class AccountPage implements OnInit {

  constructor(private viewCtrl: ViewController) {

  }

  ngOnInit(): void {

  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
