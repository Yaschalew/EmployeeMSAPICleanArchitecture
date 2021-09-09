import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
id:any;
forms:FormGroup;
employee:any;
  constructor(private fb: FormBuilder,private route: ActivatedRoute,private _employeeService:EmployeeService) {
   
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this._employeeService.getEmployeeId(this.id).subscribe((data:any)=>{
      this.employee=data;
      console.log(this.employee);
    });
    this.forms=this.fb.group({
      name:'',
      phone:'',
      email:''
    });
    console.log(this.forms.value.name);
   }

  ngOnInit(): void {
 
  }
  onSubmit(){}

}
