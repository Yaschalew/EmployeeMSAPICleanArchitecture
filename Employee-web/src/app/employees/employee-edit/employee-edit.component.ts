import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  constructor(private router:Router,private fb: FormBuilder,private route: ActivatedRoute,private _employeeService:EmployeeService) {
    this.forms=this.fb.group({
      name:'',
      phone:'',
      email:''
    });
    this.id = this.route.snapshot.paramMap.get('id');
    this._employeeService.getEmployeeId(this.id).subscribe((data:any)=>{
      this.employee=data;
      this.patchValues(data);
      console.log(this.employee.name);
    });
   }
  patchValues(data: any) {
    this.forms.patchValue({
      name: data.name,
      phone: data.phone,
      email:data.email
   })
  }

  ngOnInit(): void {
    
    

  }
  onSubmit(){
    console.log(this.forms.value);
    this._employeeService.editEmployee(this.forms.value,this.id).subscribe((data:any)=>{
      this.router.navigateByUrl("");
    })

  }
  
}
