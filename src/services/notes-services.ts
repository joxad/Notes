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

  create(note : Note) : void {
    this.af.database.list('/notes').push(note);
  }

  update(key : string, note : Note) : void {
    this.af.database.list('/notes').update(key, {
      "title" : note.title,
      "content" : note.content,
      "reminder" : note.reminder
    }


    );
  }

  delete(key : string) : void {
    this.af.database.list('/notes').remove(key);
  }

}
