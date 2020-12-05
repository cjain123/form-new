import { AppRoutingModule } from './../app-routing.module';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  formData = {
    name: '' ,
    salary: '',
   department: ''
    }
   userlist = [];
   employeeDetails(array: FormData): void {
    console.log(this.formData);
    this.userlist.push(this.formData),
    this.formData = {};
}
ondelete(deleteme: any): void  {
     this.userlist.splice(deleteme, 1);
}
   ngOnInit(): void {}
}
