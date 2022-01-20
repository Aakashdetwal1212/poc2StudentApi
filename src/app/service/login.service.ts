import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url ="http://localhost:8081/student";

  constructor(private http : HttpClient) { }

  //calling server to generate the token
  generateToken(credentials:any){
    console.log("generateToken:: loginService.ts")
    //token generate
    return this.http.post(`${this.url}/token`,credentials)
  }

  loginUser(jwtToken:any) {

    localStorage.setItem("jwtToken",jwtToken)
    console.log("loginUser :: login.service.ts "+jwtToken);
    return true;
  }

  isLoggedIn(){
    
    let jwtToken = localStorage.getItem("jwtToken");
    console.log("jwtToken==undefined =",jwtToken==undefined,"  => is undefined")
    console.log(jwtToken);

    if(jwtToken == undefined || jwtToken =='' || jwtToken==null){
      console.log("is logged in false " +jwtToken)
      return false;
    } 
    else{
      console.log("loggedIn true")
      return true; 
    }
  }

  logOut(){
    console.log("Logout:: login.Serive.ts")
    localStorage.removeItem('jwtToken');
    return true;
  }

  getToken(){
    console.log("getToken:: login.service.ts")
    return localStorage.getItem("jwtToken")
  }
}
