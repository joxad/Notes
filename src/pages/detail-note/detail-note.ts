import { Component, OnInit} from '@angular/core';
import { Note } from '../../model/note';
import {NavController, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'detail-note',
  templateUrl: 'detail-note.html'
})
export class DetailNote implements OnInit {

  note: any;
  constructor(private navController: NavController, private navParams: NavParams, private viewCtrl:ViewController) {
    this.note = navParams.get('note');
  }

  ngOnInit(): void {

  }

  dismiss() :void {
    this.viewCtrl.dismiss();
  }

}
