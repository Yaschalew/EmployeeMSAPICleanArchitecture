import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
forms:FormGroup;
  constructor(fb: FormBuilder,private _employees:EmployeeService,private router:Router ) {
    this.forms=fb.group({
      fName:'',
      lName:'',
      mName:'',
      gender:'',
      phone:'',
      email:'',
      birtDate:'',
      address:'',
      hiredAt:'',
      status:''
    });
   }
   employee:any;
   id:string='';
  ngOnInit(): void {
  // this.getOneEmployee(this.id);
  }
  onSubmit(){
    console.log("register")
    //console.log(this.forms);
    if(this.employee==null){
      console.log(this.forms.value);

    this._employees.addEmployee(this.forms.value).subscribe(data=>{
      console.log(data);
      window.location.reload();
      //this.router.navigateByUrl("employees");
    });

  }
}
}
