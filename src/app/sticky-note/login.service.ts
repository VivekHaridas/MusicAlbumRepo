import { Injectable } from '@angular/core';
import { LoginFields } from 'src/app/sticky-note/login-fields';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userLoginInfo : LoginFields = new LoginFields("VivekHaridas","Password");
  loginFlag:any=false;
  constructor() { }

  public validateDetails(loginForm:LoginFields){
    
    if(loginForm.userName==this.userLoginInfo.userName&&
      loginForm.password==this.userLoginInfo.password){
         this.loginFlag=true;
         return true;
       }
    else{
    return false;
    }
  }
}
