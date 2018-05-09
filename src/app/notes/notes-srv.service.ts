import { Injectable } from '@angular/core';
import { Notes } from './interfeces/note';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotesSrvService {

  private notes: Notes = [];
  private dataArray = new Subject<Notes>();


  dataNotes$ = this.dataArray.asObservable();

  constructor() { }

  getIndex(id: number) {
    let index = this.notes.map(function (item) { return item.id; }).indexOf(id);
    return index;
  }

  createNote(note): void {
    this.notes.push(note)
    this.updateNotes()
  }

  deleteNote(id: number): void {
    this.notes.splice(this.getIndex(id), 1);
    this.updateNotes();
  }

  editNote(item) {
    this.notes[this.getIndex(item.id)].note = item.note;
    this.updateNotes();
  }

  updateNotes() {
    this.dataArray.next(this.notes)
  }

}
