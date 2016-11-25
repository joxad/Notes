import { Component } from '@angular/core';
import { NavController, ModalController, PopoverController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { NotesService} from '../../services/notes-services';
import { Note } from '../../model/note';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AccountPage } from '../account/account';
import { PageNote} from '../note/note';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage implements OnInit {

  noteContent: string;
  noteTitle: string;
  notes: Array<Note>;
  grid: Array<Array<Note>>; //array of arrays
  selectedNote: any;
  showCreate: boolean;

  constructor(public popoverCtrl: PopoverController, public modalCtrl: ModalController, public navCtrl: NavController, private notesService: NotesService) {

  }

  getNotes(): void {
    this.notesService.all().subscribe(notes => {
      this.notes = notes;
    });
  }

  ngOnInit(): void {
    this.getNotes();
    this.showCreate = false;
  }

  showAccount(): void {
    let modal = this.modalCtrl.create(AccountPage);
    modal.present();
  }


  showCreateNoteView(): void {
    this.showCreate = true;
  }
  hideCreateNoteView(): void {
    this.showCreate = false;
  }


  createNote(): void {
    var newNote: Note;
    newNote = new Note();
    newNote.title = this.noteTitle;
    newNote.content = this.noteContent;
    this.notesService.save(newNote);
    this.showCreate = false;
  }

  showNote(note: Note): void {
    this.selectedNote = note;
  }
}
