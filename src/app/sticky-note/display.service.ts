import { Injectable } from '@angular/core';
import { MusicAlbum} from '../music-album';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  
  public copyRecordList: MusicAlbum[] =[];
  public firstName:any;
  public lastName:any;
  public id:any;
  public flag=new Subject<boolean>();
  public count= new Subject<number>();

  constructor(public http: HttpClient) { 
    this.http.get('./assets/user-details.json')
      .toPromise()
      .then(response => {
        this.firstName = response['firstName'];
        this.lastName = response['lastName'];
      });
  }
  public setFlag(flagValue){
    
    this.flag.next(flagValue);
  }
  public setCounter(){
    this.count.next(this.copyRecordList.length);
  }

  public returnRecord(check){
    for(let i=0;i<this.copyRecordList.length;i++){
      if(check==this.copyRecordList[i].id){
        return (this.copyRecordList[i]);
        
      }
    }
  }

}
