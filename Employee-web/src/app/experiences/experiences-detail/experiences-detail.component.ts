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
      Year:'',
      ResignReason:'',
      Remark:''

    });
    this.id = this.route.snapshot.paramMap.get('id');
    this._experience.getExperienceID(this.id).subscribe((data:any)=>{
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
      Position:data.position,
      Year:data.year,
      ResignReason:data.resignReason,
      Remark:data.remark

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
