import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { NotesService} from '../../services/notes-services';
import { Note } from '../../model/note';

@Component({
  templateUrl: 'notes.html'
})
export class NotesPage implements OnInit {

  notes: Note[];

  constructor(public navCtrl: NavController, private notesService: NotesService) {

  }

  getNotes(): void {
    this.notesService.all().then(notes => this.notes = notes);
  }

  ngOnInit(): void {
    this.getNotes();
  }
}
