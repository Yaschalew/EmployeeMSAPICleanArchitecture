import { Component, OnInit } from '@angular/core';

import { DeleteeducationComponent } from '../educations/deleteeducation/deleteeducation.component';
import { ExperienceService } from '../services/experiences/experience.service';
import { ExperiencepopupComponent } from './experiencepopup/experiencepopup.component';
import { ExperiencesDeleteComponent } from './experiences-delete/experiences-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
experienceList:any;
datasource:any;
id:any;
displayedColumns: string[] = ['EmployeId', 'Salary', 'Position','Company','Year','ResignReason','Remark','Action'];
  constructor(private _snackBar: MatSnackBar,private _experience:ExperienceService,public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.getExperience();
  }
  getExperience(): void
  {
    this._experience.getExperience().subscribe((data:any)=>{
      this.experienceList=data.experiences;
      this.datasource=data.experiences;
      console.log(this.experienceList);
    });

  }
  openDialog(id:string):void {
    const dialogRef = this.dialog.open(ExperiencesDeleteComponent, {
      width: '250px',
      data: {id:id}
    });
    this.id=id;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this._experience.deleteExperience(this.id).subscribe(data=>{
          location.reload();
          console.log(data);

        })
        this._snackBar.open("Experince status is deleted.","Ok");
        location.reload();
      }

     // this.animal = result;
    });

  }
  onCreate()
  {


    const dialogRef = this.dialog.open(ExperiencepopupComponent, {
      width: '40%',
      height: '60%',

    });
   dialogRef.disableClose=true;


  }



}
