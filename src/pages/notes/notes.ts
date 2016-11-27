import { Component } from '@angular/core';
import { NavController, ModalController, PopoverController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { NotesService} from '../../services/notes-services';
import { Note } from '../../model/note';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AccountPage } from '../account/account';
import { DetailNote} from '../detail-note/detail-note';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage implements OnInit {

  newNote : Note;
  notes: FirebaseListObservable<Note[]>;
  grid: Array<Array<Note>>; //array of arrays
  selectedNote: any;
  showCreate: boolean;

  constructor(
    private popoverCtrl: PopoverController,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private notesService: NotesService) {
      this.newNote = new Note();
      this.showCreate = false;
  }

  getNotes(): void {
    this.notes = this.notesService.all();
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
    console.log("hide");
  }

  deleteNote(key: string): void {
    this.notesService.delete(key);
  }

  createNote(): void {
    this.notesService.create(this.newNote);
    console.log("save");
    this.newNote = new Note();
    this.hideCreateNoteView();
  }

  showCreateNoteNewPage(): void {
    let newNote = new Note();
    this.navCtrl.push(DetailNote, {
      note: newNote
    });
  }
  showNote(note: Note): void {
    this.selectedNote = note;
    this.navCtrl.push(DetailNote, {
      note: note
    });
  }
}
