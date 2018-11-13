import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { MusicAlbum} from '../music-album';
import { DisplayService } from 'src/app/sticky-note/display.service';
import { LoginService } from 'src/app/sticky-note/login.service';
import { Router} from '@angular/router';
import { SuccessMessageComponent } from 'src/app/sticky-note/success-message/success-message.component';

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
  loginSuccessFlag:any; 
  
  public successMessageFlag:any;
  
  constructor(private displayService : DisplayService,
              private loginService:LoginService,
              private router:Router,
              ) { 
   this.recordList= this.displayService.copyRecordList;
  //  this.displayService.copyRecordList=this.recordList;
   this.id=this.displayService.copyRecordList.length + 1;
   this.loginSuccessFlag=this.loginService.loginFlag;
  }

  ngOnInit() {
    this.displayService.flag.subscribe((response)=>{
      this.successMessageFlag=response;
     });
  }
  public addRecord(){
    this.record.id=this.id;
    this.recordList.push(this.record);
    this.record = new MusicAlbum(++this.id,"","","","");
    this.displayService.setCounter();
    this.displayService.setFlag(true);     
  }
  public routeToLogin(){
  this.router.navigateByUrl('/log-in')
  }
}
