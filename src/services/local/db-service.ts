import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Note }from '../../model/note';

@Injectable()
export class DBService {

  constructor(private storage: Storage) {

  }

  getNotes() {
    console.log("DBService : getnotes");

    return this.storage.get('notes');
  }

  save(notes) {
    let newData = JSON.stringify(notes);
    console.log(newData);
    return this.storage.set('notes', newData);
  }
}
