import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})

export class NoteFormComponent {
  @Output() createNote: EventEmitter<any> = new EventEmitter(false);

  note: string = '';
  id: number = 0;

  clear(): void {
    this.note = '';
  }

  submit(): void {

    const newNote: string = this.note;
    const newdate = new Date();

    this.createNote.emit({
      id: this.id++,
      note: newNote,
      time: newdate.toLocaleTimeString()
    });


    this.clear();
  }
}
