import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DisplayService } from 'src/app/sticky-note/display.service';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent implements OnInit {
  public successMessageFlag:any;
  constructor(private router:Router,
              private displayService:DisplayService) { }

  ngOnInit() {
  }

  public closeMessage(){
    this.displayService.setFlag(false);
  }

}
