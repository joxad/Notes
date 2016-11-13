import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { NotesService} from '../../services/notes-services';
import { Note } from '../../model/note';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector : 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage implements OnInit {

  notes: FirebaseListObservable<Note[]>;

  constructor(public navCtrl: NavController, private notesService: NotesService) {

  }

  getNotes(): void {
    this.notes = this.notesService.all();
  }

  ngOnInit(): void {
    this.getNotes();
  }
}
