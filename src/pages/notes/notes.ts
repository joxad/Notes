import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { NotesService} from '../../services/notes-services';
import { Note } from '../../model/note';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {AccountPage} from '../account/account';
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage implements OnInit {

  notes: Array<Note>;
  grid: Array<Array<Note>>; //array of arrays

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, private notesService: NotesService) {

  }

  getNotes(): void {
    this.notesService.all().subscribe(notes => {
      this.notes = notes;
      this.grid = Array(Math.ceil(this.notes.length / 2)); //MATHS!
      this.addNotes();
    });
  }

  ngOnInit(): void {
    this.getNotes();
  }

  showAccount() : void {
    let modal = this.modalCtrl.create(AccountPage);
    modal.present();
  }
  
  addNotes(): void {

    let rowNum = 0; //counter to iterate over the rows in the grid

    for (let i = 0; i < this.notes.length; i += 3) { //iterate images

      this.grid[rowNum] = Array(3); //declare two elements per row

      if (this.notes[i]) { //check file URI exists
        this.grid[rowNum][0] = this.notes[i] //insert image
      }

      if (this.notes[i + 1]) { //repeat for the second image
        this.grid[rowNum][1] = this.notes[i + 1]
      }

      if (this.notes[i + 2]) { //repeat for the second image
        this.grid[rowNum][2] = this.notes[i + 2]
      }
      rowNum++; //go on to the next row
    }

  }
}
