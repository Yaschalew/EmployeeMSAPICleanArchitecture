import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
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
     // this.forms.value.name=this.employee.name;
     // console.log(this.employee.name);
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
    this.router.navigateByUrl("");
  }
}
