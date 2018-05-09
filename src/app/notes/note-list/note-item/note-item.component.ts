import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent {


  @Input() note;
  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() edit: EventEmitter<any> = new EventEmitter(false);




  constructor() { }

  onBlur(e, item, keyV): void {
    item[keyV] = e.target.innerHTML;
    this.edit.emit(item);
  }

}
