import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  //request : any;

  constructor(private httpClient : HttpClient) { }

  public generateToken(request : any){
    return this.httpClient.post("http://localhost:8081/student/authenticate",request,{responseType: 'text' as 'json'});
  }

  public welcome(token : any) {
    let tokenStr = 'Bearer '+token;

    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.httpClient.get("http://localhost:8081/",{headers,responseType: 'text' as 'json'});
  }
}
