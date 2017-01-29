import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs/Rx";
import { Note } from '../model/note';
import { NotesService } from '../services/api/notes-services';
import { DBService } from '../services/local/db-service';

@Injectable()
export class NoteManager {

    dbNotes: Note[];
    notes: Note[];
    observableNotes: BehaviorSubject<Note[]> = new BehaviorSubject([]);
    constructor(
        private notesService: NotesService,
        private db: DBService) {
        this.dbNotes = new Array<Note>();
    }

    getNotes(): void {
        this.notesService.all()
            .subscribe(json => {
                this.notes = json.data;
                for (var i = 0, len = this.notes.length; i < len; i++) {
                    this.observableNotes.getValue().push(this.notes[i]);
                }
                this.observableNotes.next(this.notes);
            }, err => {
                console.log(err);
            });
        console.log("NoteManager - DB call getnotes");
        this.db.getNotes().then((notes) => {
            console.log("NoteManager - DB callback");
            if (notes) {
                console.log('Locale' + notes);
                this.dbNotes = JSON.parse(notes);
                for (var i = 0, len = this.dbNotes.length; i < len; i++) {
                    console.log("GET DB" + this.observableNotes.getValue())
                    this.observableNotes.getValue().push(this.dbNotes[i]);
                }
                this.observableNotes.next(this.observableNotes.getValue());
                console.log("GET DB" + this.observableNotes.getValue())
            }
        });
    }

    save(note: Note) {
        console.log(note);
        this.observableNotes.getValue().push(note);
        this.observableNotes.next(this.observableNotes.getValue());

        this.notesService.create(note).subscribe(
            data => {
                console.log(data + "sauvé sur le web");
            },
            err => {
                console.log(err + " error sur le web");
            }
        );
        this.dbNotes.push(note);
        this.db.save(this.dbNotes).then(
            data => {
                console.log(data + "sauvé en local");
            },
            err => {
                console.log(err + " error en local");
            }
        );
    }

    getObservableNotes() {
        return this.observableNotes.asObservable();
    }
}
