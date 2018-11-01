import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/sticky-note/display.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menu:string[];
  
  constructor(public displayService:DisplayService) { 
    this.menu  = ["Register","View Records","Log In","Sign Up"];
  }  

  ngOnInit() {
  }

}
