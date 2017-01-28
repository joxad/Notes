import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Account } from '../../model/account';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../../services/api/auth-service';
import {UserService} from '../../services/api/user-service';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage implements OnInit {

  isCreate: boolean;
  account: Account;
  constructor(private viewCtrl: ViewController, private authService: AuthService, private userService: UserService) {
    this.isCreate = false;
    this.account = new Account();
  }

  ngOnInit(): void {
    this.userService.me().subscribe(data => {
      this.account.email = data.email;
    },
      err => {

      });

  }

  register(email: string, password: string): void {
    this.authService.signupUser(email, password)
      .subscribe(
      data => {
        console.log(data);
        this.connect(email, password)
      },
      err => console.log(err)
      );
  }

  connect(email: string, password: string): void {
    //TODO call auth,
    // if email exist : try to connect
    // if pwd wrong show error password
    // if email !exist, show is create
    // update button to createaccount
    this.authService.signInLocal(email, password).subscribe(
      data => {
        console.log(data);
        this.dismiss();
      },
      err => {
        console.log(err);
      }
    );
  }

  createAccount(): void {
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
