import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-new-note-button',
  templateUrl: './add-new-note-button.component.html',
  styleUrls: ['./add-new-note-button.component.css']
})
export class AddNewNoteButtonComponent implements OnInit {
  public  noteCollection= [];
  public id=0;
  public noteColors=["red","green","blue","grey"];
  
  
  public addNewNote(){
   let note = {noteTitle:"",noteDescription:"",deletionId:this.id,color:this.noteColors[Math.floor(Math.random()*4)]};
   this.noteCollection.push(note);
   this.id++;
   
  }

  public deleteStickyNote(label){
    for(let i=0;i<this.noteCollection.length;i++){
      if(label==this.noteCollection[i].deletionId){
        this.noteCollection.splice(i,1);
      }
    }
  }
 

  constructor() { }

  ngOnInit() {
  }

}
