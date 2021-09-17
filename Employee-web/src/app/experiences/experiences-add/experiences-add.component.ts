import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

import { ExperienceService } from 'src/app/services/experiences/experience.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiences-add',
  templateUrl: './experiences-add.component.html',
  styleUrls: ['./experiences-add.component.scss']
})
export class ExperiencesAddComponent implements OnInit {
  forms:FormGroup;
  constructor(private fb:FormBuilder,private _experience:ExperienceService,private router:Router) {

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
    this._experience.addExperience(this.forms.value).subscribe(data=>
      {
        this.router.navigateByUrl("experiences");
      });
  }

}
