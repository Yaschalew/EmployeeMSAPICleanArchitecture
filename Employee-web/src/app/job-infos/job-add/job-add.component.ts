import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { JobInfoService } from 'src/app/services/job-info.service';
import { PositionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.scss']
})
export class JobAddComponent implements OnInit {
forms:FormGroup;
employees:any;
positions:any;
  constructor(private _fb:FormBuilder,private _employeeService:EmployeeService,private _positionService:PositionService,
    private _jobService:JobInfoService,private router:Router ) {
    this.forms=this._fb.group({
      employeeId:'',
      positinId:'',
      role:'',
      hiredDate:'',
      status:false,
      remark:''

    });
   }

  ngOnInit(): void {
this._employeeService.getEmployees().subscribe((data:any)=>{
  this.employees=data.employees;
});

this._positionService.getPositions().subscribe((data:any)=>{
  this.positions=data.positions;
})
  }
  onSubmit(){
   this._jobService.addJobInfo(this.forms.value).subscribe((data:any)=>{
     console.log(data);
     this.router.navigateByUrl("jobInfos");
   })
  }
}
