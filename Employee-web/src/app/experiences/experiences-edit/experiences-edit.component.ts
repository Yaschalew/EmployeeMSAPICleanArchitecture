import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ExperienceService } from 'src/app/services/experiences/experience.service';

@Component({
  selector: 'app-experiences-edit',
  templateUrl: './experiences-edit.component.html',
  styleUrls: ['./experiences-edit.component.scss']
})
export class ExperiencesEditComponent implements OnInit {
forms:FormGroup;
experience:any;
id:any;
  constructor(private router:Router,private fb: FormBuilder,private route: ActivatedRoute,private _experience:ExperienceService) {

this.forms=this.fb.group({
  Employeid:'',
  Salary:'',
  Position:'',
  Company:'',
  Year:'',
  ResignReason:'',
  Remark:''

});
this.id=this.route.snapshot.paramMap.get('id');
this._experience.getExperienceID(this.id).subscribe((data:any)=>{
  this.experience=data;
  this.patchValues(data);
  console.log(this.experience.level);


   });}


   patchValues(data: any) {
    this.forms.patchValue({
      Employeid: data.employeId,
      Salary: data.salary,
      Position:data.position,
      Company:data.company,
      Year:data.year,
      ResignReason:data.resignReason,
      Remark:data.remark,


   })
  }
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.forms.value);
    this._experience.editExperience(this.forms.value,this.id).subscribe((data:any)=>{
      this.router.navigateByUrl("experiences");
    })


}}
