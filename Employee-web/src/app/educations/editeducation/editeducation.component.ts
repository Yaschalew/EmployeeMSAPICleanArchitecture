import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { EducationService } from 'src/app/services/educations/education.service';

@Component({
  selector: 'app-editeducation',
  templateUrl: './editeducation.component.html',
  styleUrls: ['./editeducation.component.scss']
})
export class EditeducationComponent implements OnInit {
forms:FormGroup;
education:any;
id:any;
  constructor(private router:Router,private fb: FormBuilder,private route: ActivatedRoute,private _educationservice:EducationService) {

this.forms=this.fb.group({
  employeid:'',
  level:'',
  graduated_year:'',
  institute:'',
  gpa:''


});
this.id=this.route.snapshot.paramMap.get('id');
alert(this.id);
this._educationservice.getEducationById(this.id).subscribe((data:any)=>{
  this.education=data;
  this.patchValues(data);
  console.log(this.education);
});
  }
patchValues(data: any) {
  this.forms.patchValue({
    employeid: data.employeeId,
    level: data.level,
    graduated_year:data.graduatedYear,
    institute:data.institute,
    gpa:data.gpa

 })
}


  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.forms.value);
    this._educationservice.editEducation(this.forms.value,this.id).subscribe((data:any)=>{
      this.router.navigateByUrl("educations");
    })


}}
