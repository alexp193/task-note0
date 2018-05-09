import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NoteFormComponent } from './notes/note-form/note-form.component';
import { NotesComponent } from './notes/notes.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { NoteItemComponent } from './notes/note-list/note-item/note-item.component';

import { NotesSrvService } from './notes/notes-srv.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NoteFormComponent,
    NotesComponent,
    NoteListComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NotesSrvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
