import { Component } from '@angular/core';
import { NavController, ToastController, ModalController, PopoverController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { NotesService } from '../../services/api/notes-services';
import { DBService } from '../../services/local/db-service';
import { Note } from '../../model/note';
import { AccountPage } from '../account/account';
import { DetailNote } from '../detail-note/detail-note';
import { PrefService } from '../../services/local/pref-service';
import { AuthService } from '../../services/api/auth-service';
import { Platform } from 'ionic-angular';
import { BehaviorSubject } from "rxjs/Rx";
import { NoteManager } from '../../manager/note-manager';

@Component({
    selector: 'page-notes',
    templateUrl: 'notes.html'
})
export class NotesPage implements OnInit {

    newNote: Note;
    selectedNote: any;
    showCreate: boolean;
    isMobile: boolean;
    isLarge: boolean;
    isMedium: boolean;
    constructor(private popoverCtrl: PopoverController,
        private modalCtrl: ModalController,
        private navCtrl: NavController,
        private notesService: NotesService,
        private toastController: ToastController,
        private prefService: PrefService,
        private authService: AuthService,
        private platform: Platform,
        private noteManager: NoteManager) {

        this.newNote = new Note();
        this.showCreate = false;
        console.log(platform.width());
        this.testSizeScreen(platform.width());
    }
    ngOnInit(): void {

    }
    ionViewWillEnter() {
        this.loadData();
    }

    loadData() {
        this.prefService.init().then(
            () => {
                this.refreshToken();
            }
        );
        this.showCreate = false;
    }
    refreshToken(): void {
        if (this.prefService.getToken()) {
            this.authService.refreshToken().subscribe(data => {
                this.getNotes();
            }, err => { });
        } else {
          this.getNotes();
        }
    }

    getNotes(): void {
        this.noteManager.getNotes();
    }

    showAccount(): void {
        let modal = this.modalCtrl.create(AccountPage);
        modal.onDidDismiss(data => {
            console.log(data);
            this.loadData();
        });
        modal.present();
    }

    showCreateNoteView(): void {
        console.log("show create view");
        this.showCreate = true;
    }
    hideCreateNoteView(event: Event): void {
        if (this.showCreate) {
            this.showCreate = false;
            console.log("hide");
        }
    }

    bookmarkNote(event: Event, note: Note): void {
        event.stopPropagation();
        this.showToast(note.title + "is now part of your favorites", 2000);
    }

    deleteNote(event: Event, note: Note): void {
        event.stopPropagation();
        this.notesService.remove(note._id).subscribe(data => {
            this.showToast(note.title + "has been deleted", 2000);
          //  var index = this.notes.indexOf(note, 0);
          //  if (index > -1) {
            //    this.notes.splice(index, 1);
            //}
        }, err => {
            console.log("delete error");
            this.showToast(err, 2000);
        });
    }

    createNote(): void {
        this.noteManager.save(this.newNote);
        this.newNote = new Note();
        this.hideCreateNoteView(null);
    }

    showNote(note: Note): void {
        console.log("show detail");
        this.selectedNote = note;
        this.navCtrl.push(DetailNote, {
            note: note
        });
    }

    showToast(message: string, duration: number): void {
        let toast = this.toastController.create({
            message: message,
            duration: duration
        });
        toast.present();
    }


    onResize(event) {
        console.log(event.target.innerWidth);
        this.testSizeScreen(event.target.innerWidth);
    }

    testSizeScreen(screenWidth: number) {
        if (screenWidth < 500) {
            this.isMobile = true;
            this.isMedium = false;
            this.isLarge = false;
            return;
        }
        this.isMobile = false;
        if (screenWidth < 900) {
            this.isMedium = true;
            this.isLarge = false;
            return;
        }
        this.isMedium = false;
        this.isLarge = true;

    }
}
