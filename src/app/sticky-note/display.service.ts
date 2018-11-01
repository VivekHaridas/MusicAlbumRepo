import { Injectable } from '@angular/core';
import { MusicAlbum} from '../music-album';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  
  public copyRecordList: MusicAlbum[] =[];
  public firstName:any;
  public lastName:any;
  public id:any;

  constructor(public http: HttpClient) { 
    this.http.get('./assets/user-details.json')
      .toPromise()
      .then(response => {
        this.firstName = response['firstName'];
        this.lastName = response['lastName'];
      });
  }
  public returnRecord(check){
    for(let i=0;i<this.copyRecordList.length;i++){
      if(check==this.copyRecordList[i].id){
        return (this.copyRecordList[i]);
        
      }
    }
  }

}
