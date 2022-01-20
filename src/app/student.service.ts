import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:8081/student/getoll/admin";

  constructor(private httpClient : HttpClient) { }

   public getStudentList(){
     console.log("student.service.ts")
     return this.httpClient.get("http://localhost:8081/student/getall/admin");
   }
}
