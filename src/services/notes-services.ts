import {Injectable} from '@angular/core';
import { Note } from '../model/note';
import { NOTES } from './mock-notes';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class NotesService {

  constructor(private af : AngularFire) {

  }

  all(): FirebaseListObservable<Note[]> {
    return this.af.database.list('/notes');
  }
}
