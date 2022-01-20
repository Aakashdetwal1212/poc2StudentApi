import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username :'',
    password :''
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("form is submitted");

    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null)) {
            console.log("we have submitted form to server");
            //tokengenrate
            console.log(this.credentials.username,":::::::::::",this.credentials.password)
            this.loginService.generateToken(this.credentials).subscribe(
              (response:any)=>{
                     //success
                     console.log("response.token",response.jwtToken);
                     console.log("response",response)
                     console.log("Success.........")
                     this.loginService.loginUser(response.jwtToken);
                     window.location.href="/dashboard"
              },error=>{
                     //error
                     console.log("ERRORS")
                     console.log(error);
              }
            )
    }
    else{
      console.log("fields are empty");
    }
  }

}
