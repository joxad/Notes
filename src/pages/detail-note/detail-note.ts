import { Component, OnInit} from '@angular/core';
import { Note } from '../../model/note';
import {NavController, NavParams} from 'ionic-angular';
@Component({
  selector: 'detail-note',
  templateUrl: 'detail-note.html'
})
export class DetailNote implements OnInit {

  note: any;
  constructor(private navController: NavController, private navParams: NavParams) {

  }

  ngOnInit(): void {
    this.note = this.navParams.get('note');

  }


}
