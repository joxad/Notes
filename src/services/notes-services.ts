import {Injectable} from '@angular/core';
import { Note } from '../model/note';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NotesService {
  private notesUrl = "http://localhost:3030/notes";
  private headers: any;
  private options: any;
  data: any;
  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    this.options = new RequestOptions({ headers: this.headers }); // Create a request option
  }

  all() {
    return this.http.get(this.notesUrl).map(res => res.json());
  }
  create(note: Note) {
    return this.http.post(this.notesUrl, note, this.options).map(res => res.json());
  }
  update(note: Note) {
    return this.http.put(this.notesUrl + "/" + note._id, note, this.options).map(res => res.json());
  }
  delete(id: string) {
    return this.http.delete(this.notesUrl + "/" + id).map(res => res.json());// ...and calling .json() on the response to return data
  }

}
