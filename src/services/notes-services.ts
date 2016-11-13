import {Injectable} from '@angular/core';
import { Note } from '../model/note';
import { NOTES } from './mock-notes';

@Injectable()
export class NotesService {
  all(): Promise<Note[]> {
    return Promise.resolve(NOTES);
  }
}
