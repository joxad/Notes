import {Injectable} from '@angular/core';
import { Note } from '../../model/note';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {BaseService} from './base-service';
import {PrefService} from '../local/pref-service';

@Injectable()
export class NotesService extends BaseService {
  private notesUrl = "notes";
  constructor(protected http: Http, protected pref: PrefService) {
    super(http, pref);
  }

  all() {
    return this.get(this.notesUrl).map(res => res.json());
  }
  create(note: Note) {
    return this.post(this.notesUrl, note).map(res => res.json());
  }
  update(note: Note) {
    return this.put(this.notesUrl + "/" + note._id, note).map(res => res.json());
  }
  remove(id: string) {
    return this.delete(this.notesUrl + "/" + id).map(res => res.json());// ...and calling .json() on the response to return data
  }

}
