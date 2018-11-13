import { Component, OnInit } from '@angular/core';
import { LoginFields } from 'src/app/sticky-note/login-fields';
import { LoginService } from 'src/app/sticky-note/login.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {
 
  public loginForm: LoginFields;
  public errorMessageFlag=false;
  public loginFlag:any;

  constructor(private loginService:LoginService,
              private router:Router) {
                this.loginForm=new LoginFields('',''); 
  }

  ngOnInit() {
  }
  public routeToRegisterForm(){
    this.loginFlag=this.loginService.validateDetails(this.loginForm);
    if(this.loginFlag==true){
      this.errorMessageFlag=false;
      this.router.navigateByUrl('/register');
      
    } 
    else{
     
      this.errorMessageFlag=true;
    } 
  }
}
