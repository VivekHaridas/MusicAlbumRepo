import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/sticky-note/display.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menu:string[];
  public recordCount:number=0;
  constructor(public displayService:DisplayService) { 
    this.menu  = ["Register","View Records","Log In","Sticky Note"];
    this.displayService.count.subscribe((response)=>{
     this.recordCount=response;
    });
  }  

  ngOnInit() {
  }

}
