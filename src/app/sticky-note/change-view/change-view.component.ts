import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/sticky-note/display.service';
import { MusicAlbum } from 'src/app/music-album';

@Component({
  selector: 'app-change-view',
  templateUrl: './change-view.component.html',
  styleUrls: ['./change-view.component.css']
})
export class ChangeViewComponent implements OnInit {
  public viewRecordList:MusicAlbum[];


  constructor(private displayService : DisplayService) { 
    
      this.viewRecordList = this.displayService.copyRecordList;
      console.log('this.displayService.copyRecordList',this.displayService.copyRecordList)
  }

  ngOnInit() {
  }
  
  public deleteRecord(deletionId){
    for(let i=0;i<this.viewRecordList.length;i++){
      if((deletionId)==this.viewRecordList[i].id){
        this.viewRecordList.splice(i,1);
        this.displayService.setCounter();
      }
    }    
  }

}
