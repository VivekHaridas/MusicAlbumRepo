import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { MusicAlbum } from 'src/app/music-album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
 
  @Input() element:MusicAlbum;
  @Output() deleteElement:EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('element',this.element)
  }
  public removeElement(){
   this.deleteElement.emit(this.element.id);
  }
}
