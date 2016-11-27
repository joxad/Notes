import { Component, OnInit, ViewChild} from '@angular/core';
import { Note } from '../../model/note';
import { NotesService }from '../../services/notes-services';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';

@Component({
  selector: 'create-note',
  templateUrl: 'create-note.html'
})
export class CreateNote implements OnInit {

  minDate: string;
  checklist: boolean;
  note: any;
  constructor(
    private navController: NavController,
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private notesService: NotesService) {
    this.note = navParams.get('note');
  }

  ngOnInit(): void {
    this.checklist = false;
  }

  saveNote(): void {
    this.notesService.create(this.note);
    console.log("save");
  }




}
