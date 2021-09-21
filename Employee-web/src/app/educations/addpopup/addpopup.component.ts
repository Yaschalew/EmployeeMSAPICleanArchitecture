import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { EducationService } from 'src/app/services/educations/education.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpopup',
  templateUrl: './addpopup.component.html',
  styleUrls: ['./addpopup.component.scss']
})
export class AddpopupComponent implements OnInit {
  forms:FormGroup;

  constructor(fb:FormBuilder,private _educations:EducationService,private router:Router) {
    this.forms=fb.group({
      EmployeeId:'',
      level:'',
      graduated_year:'',
      institute:'',
      gpa:'',
      address:''

    });
   }
   education:any;
   id:string='';


  ngOnInit(): void {
  }
  onSubmit()
  {
    this._educations.addEducation(this.forms.value).subscribe(data=>
      {
        this.router.navigateByUrl("educations");
      });
  }


  }
