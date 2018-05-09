import { Component, OnInit } from '@angular/core';
import { NotesSrvService } from './notes-srv.service';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(public noteSrv: NotesSrvService) { }

  ngOnInit() {


  }

}
