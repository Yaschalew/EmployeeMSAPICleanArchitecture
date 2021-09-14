import { Component, OnInit } from '@angular/core';

import { EducationService } from '../services/educations/education.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit {
educationList:any;

  constructor(private _education:EducationService) { }

  ngOnInit(): void {
    this.getEducations();
  }
  getEducations()
  {
    this._education.getEducation().subscribe((data:any)=>{
this.educationList=data.educations;
console.log(this.educationList);
    });

  }

}
