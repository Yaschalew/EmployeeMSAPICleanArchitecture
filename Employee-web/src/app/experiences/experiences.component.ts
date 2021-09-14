import { Component, OnInit } from '@angular/core';

import { EducationService } from '../services/educations/education.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
experienceList:any;
  constructor(private _educationservice: EducationService) { }

  ngOnInit(): void {
    this.getExperience();
  }
  getExperience()
  {
    this._educationservice.getEducation().subscribe((data:any)=>{
      this.experienceList=data.experiences;
      console.log(this.experienceList);
  });
  }
}
