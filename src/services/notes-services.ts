import {Injectable} from '@angular/core';
import { Note } from '../model/note';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class NotesService {

  constructor(private af: AngularFire) {

  }

  all(): FirebaseListObservable<Note[]> {
    return this.af.database.list('/notes');
  }

  save(note : Note) : void {
    this.af.database.list('/notes').push(note);
  }
  
  delete(note : Note) : void {
    this.af.database.list('/notes').remove(note.id);
  }

}
