import { Component } from '@angular/core';
import { NavController, ToastController, ModalController, PopoverController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { NotesService} from '../../services/api/notes-services';
import { Note } from '../../model/note';
import { AccountPage } from '../account/account';
import { DetailNote} from '../detail-note/detail-note';
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage implements OnInit {

  newNote: Note;
  notes: any;
  selectedNote: any;
  showCreate: boolean;

  constructor(
    private popoverCtrl: PopoverController,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private notesService: NotesService,
    private toastController: ToastController) {
    this.newNote = new Note();
    this.showCreate = false;
  }
  ngOnInit(): void {
    this.getNotes();
    this.showCreate = false;
  }

  getNotes(): void {
    this.notesService.all()
      .subscribe(json => {
        this.notes = json.data;
      }, err => {
        console.log(err);
      });
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

  deleteNote(event : Event,note: Note): void {
    event.stopPropagation();
    this.notesService.delete(note._id).subscribe(data => {
        this.showToast(note.title + "has been deleted", 2000);
        var index = this.notes.indexOf(note, 0);
        if (index > -1) {
           this.notes.splice(index, 1);
        }
    }, err => {
      console.log("delete error");
      this.showToast(err, 2000);
    });
  }

  createNote(): void {
    this.notesService.create(this.newNote).subscribe(
      data => {
        console.log(data);
        this.notes = [ data, ...this.notes];
      },
      err => {
        console.log(err);
       }
    );
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

  showToast(message: string, duration : number): void {
    let toast = this.toastController.create({
      message: message,
      duration: duration
    });
    toast.present();
  }


}
