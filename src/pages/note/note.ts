import { Component, OnInit} from '@angular/core';
import { Note } from '../../model/note';

@Component({
  selector: 'page-note',
  templateUrl: 'note.html'
})
export class PageNote implements OnInit {
  newNote: any;

  ngOnInit(): void {

  }

  createNote(): void {
    this.newNote = new Note();
  }
}
