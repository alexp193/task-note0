import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note, Notes } from '../interfeces/note';
import { NotesSrvService } from '../notes-srv.service';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {


  constructor(public notesSrv: NotesSrvService) { }

  public notes = [];

  ngOnInit() {
    this.notesSrv.dataNotes$.subscribe(
      data => {
        this.notes = data;
      });
  }

}
