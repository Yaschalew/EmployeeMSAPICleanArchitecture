import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { ExperienceService } from 'src/app/services/experiences/experience.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiences-detail',
  templateUrl: './experiences-detail.component.html',
  styleUrls: ['./experiences-detail.component.scss']
})
export class ExperiencesDetailComponent implements OnInit {

  id:any;
  forms:FormGroup;
experience:any;
  constructor(private router:Router,private fb: FormBuilder,private route: ActivatedRoute,private _experience:ExperienceService) {

    this.forms=this.fb.group({
      Employeid:'',
      Salary:'',
      Position:'',
      company:'',
      Year:'',
      ResignReason:'',
      Remark:''

    });
    this.id = this.route.snapshot.paramMap.get('id');
    this._experience.getExperience().subscribe((data:any)=>{
      this.experience=data;
      this.patchValues(data);
      // this.forms.value.name=this.experience.name;///////////
      // console.log(this.experience.name);
   });
  }
  patchValues(data: any) {
    this.forms.patchValue({
      Employeid:data.employeId,
      Salary:data.salary,
      position:data.position,
      company:data.company,
      year:data.year,
      resignReason:data.resignReason,
      remark:data.remark

   })
  }

  ngOnInit(): void {

  }
  // onSubmit()
  // {
  //   this.router.navigateByUrl("educations");
  // }
  back()
  {
    this.router.navigateByUrl("/experiences");
  }
}
