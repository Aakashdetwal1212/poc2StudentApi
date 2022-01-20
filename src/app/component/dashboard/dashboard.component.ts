import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  getStudentList(){
    this.studentService.getStudentList().subscribe(
      users=>{
        console.log("getStudentList::: dashBoard.Componet.ts",users);
      },
      error=>{
        console.log("Error Got in dashboard.ts::>",error);
      }
    )
  }

}
