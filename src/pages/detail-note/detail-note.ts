import { Component, OnInit} from '@angular/core';
import { Note } from '../../model/note';
import { NotesService }from '../../services/notes-services';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'detail-note',
  templateUrl: 'detail-note.html'
})
export class DetailNote implements OnInit {

  checklist : boolean;
  note: any;
  constructor(
    private navController: NavController,
    private navParams: NavParams,
    private viewCtrl:ViewController,
    private notesService: NotesService) {
    this.note = navParams.get('note');
  }

  ngOnInit(): void {
      this.checklist = false;
  }

  saveNote(): void {
    let newNote = new Note();
    this.notesService.save(newNote);
    console.log("save");
  }

  notify() : void {

  }
  dismiss() :void {
    this.viewCtrl.dismiss();
  }

}
