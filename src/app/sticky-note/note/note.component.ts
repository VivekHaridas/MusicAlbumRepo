import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() label : any;
  @Input() colorLabel :any;
  @Output() noteDeleteButtonClick:EventEmitter<any> =new EventEmitter();
     
  public deleteNote(){
  
   this.noteDeleteButtonClick.emit(this.label);

  }
  constructor() {  
     
  }

  ngOnInit() {
  }

}
