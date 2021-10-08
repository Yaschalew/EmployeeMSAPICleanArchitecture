import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ExperienceService } from 'src/app/services/experiences/experience.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencepopup',
  templateUrl: './experiencepopup.component.html',
  styleUrls: ['./experiencepopup.component.scss']
})
export class ExperiencepopupComponent implements OnInit {
  forms:FormGroup;

  constructor(fb:FormBuilder,private _experience:ExperienceService,private router:Router) {

    this.forms=fb.group({
      EmployeeId:'',
      Year:'',
      Salary:'',
      Position:'',
      Company:'',
      ResignReason:'',
      Remark:''

    });
   }
   experience:any;
   id:string='';
  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.forms.value);
    this._experience.addExperience(this.forms.value).subscribe(data=>
      {
        window.location.reload();
      });
  }

}
