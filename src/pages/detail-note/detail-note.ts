import { Component, OnInit, ViewChild} from '@angular/core';
import { Note } from '../../model/note';
import { NotesService }from '../../services/notes-services';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';

@Component({
  selector: 'detail-note',
  templateUrl: 'detail-note.html'
})
export class DetailNote implements OnInit {
  @ViewChild('dateTime') dateSelector;

  minDate: string;
  checklist: boolean;
  note: any;
  constructor(
    private navController: NavController,
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private notesService: NotesService) {
    this.note = navParams.get('note');
    this.minDate = moment().startOf('day').format('YYYY-MM-DD');
  }

  ngOnInit(): void {
    this.checklist = false;
  }

  saveNote(): void {
    if (this.note._id) {
      this.notesService.update(this.note).subscribe(
        data => {
          console.log(data);
          this.dismiss();
        },
        error => {
          console.log(error);
        }
      );
    }
    else {
      this.notesService.create(this.note);
    }
    console.log("save");
  }

  checklistMode() : void {
    this.checklist = true;
  }
  attach(): void {

  }
  showTime(): void {
    this.dateSelector.open();
  }
  dismiss(): void {
    this.viewCtrl.dismiss();
  }
  personAdd(): void {

  }
  share(): void {

  }
  star(): void {

  }
}
