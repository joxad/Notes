import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Account } from '../../model/account';
import { Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage implements OnInit {

  isCreate : boolean;
  account : Account;
  constructor(private viewCtrl: ViewController) {
    this.isCreate = false;
    this.account =  new Account();
  }

  ngOnInit(): void {

  }


  connect(): void {
    //TODO call auth,
    // if email exist : try to connect
      // if pwd wrong show error password
    // if email !exist, show is create
    // update button to createaccount
    this.isCreate = true;
  }

  createAccount() : void {
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
