import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/sticky-note/display.service';
import { MusicAlbum } from 'src/app/music-album';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-view-album-details',
  templateUrl: './view-album-details.component.html',
  styleUrls: ['./view-album-details.component.css']
})
export class ViewAlbumDetailsComponent implements OnInit {
  public id:any;
  public detailedAlbum:MusicAlbum;
  
  constructor(
    public displayService:DisplayService,
    private route: ActivatedRoute,
    private router:Router
    ) {
       
   }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.detailedAlbum=this.displayService.returnRecord(this.id);
  }
  public closeView(){
    this.router.navigateByUrl('/view-records');
  }
}
