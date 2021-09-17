import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { EducationService } from 'src/app/services/educations/education.service';

@Component({
  selector: 'app-detaileducation',
  templateUrl: './detaileducation.component.html',
  styleUrls: ['./detaileducation.component.scss']
})
export class DetaileducationComponent implements OnInit {
id:any;
forms:FormGroup;
education:any;
  constructor(private router:Router,private fb: FormBuilder,private route: ActivatedRoute,private _educationservice:EducationService) {

    this.forms=this.fb.group({
      employeid:'',
      institute:'',
      gpa:'',
      address:'',
      graduated_year:'',
      level:'',


    });
    this.id = this.route.snapshot.paramMap.get('id');
    this._educationservice.getEducationById(this.id).subscribe((data:any)=>{
      this.education=data;
      this.patchValues(data);
      this.forms.value.name=this.education.name;
      console.log(this.education.name);
   });
  }
  patchValues(data: any) {
    this.forms.patchValue({
      employeid:data.employeeId,
      institute:data.institute,
      gpa:data.gpa,
      address:data.address,
      graduated_year:data.graduatedYear,
      level:data.level,


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
    this.router.navigateByUrl("/educations");
  }

}
