import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student : Student[];

  constructor(private studentService : StudentService) { }

  ngOnInit(): void {

   this.getStudents();
  }
  s : any;
  private getStudents(){
    //this.studentService.getStudentList().subscribe(data => {
    //  this.student = data;
    let resp = this.studentService.getStudentList();
    resp.subscribe((data) => this.s=data);
    
  }

}
