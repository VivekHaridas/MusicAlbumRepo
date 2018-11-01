import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { MusicAlbum} from '../music-album';
import { DisplayService } from 'src/app/sticky-note/display.service';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.css']
})
export class AlbumFormComponent implements OnInit {
  artists=["A R Rahman","Ilayaraja","Hariharan","Shankar Mahadevan","Shreya Ghoshal","Other"];
  id:any;
  record : MusicAlbum= new MusicAlbum(this.id,"","","","");
  recordList: MusicAlbum[];   
  
  constructor(private displayService : DisplayService) { 
  
   this.recordList=this.displayService.copyRecordList;
   this.id=this.displayService.copyRecordList.length+1;
  }

  ngOnInit() {
  }
  public addRecord(){
    this.record.id=this.id;
    this.recordList.push(this.record);
    this.record = new MusicAlbum(++this.id,"","","","");
     
   
  }
 
}
