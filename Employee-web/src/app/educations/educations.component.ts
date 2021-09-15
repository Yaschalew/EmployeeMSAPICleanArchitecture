import { Component, OnInit } from '@angular/core';

import { DeleteeducationComponent } from './deleteeducation/deleteeducation.component';
import { EducationService } from '../services/educations/education.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit {
  displayedColumns: string[] = ['EmployeId', 'Level', 'GraduatedYear','Institue','GPA','action'];
datasource:any;
educationList:any;
id:any;
  constructor(private _snackBar: MatSnackBar,private _education:EducationService,public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.getEducations();
  }
  getEducations()
  {
    this._education.getEducation().subscribe((data:any)=>{
      this.educationList=data.educations;
      this.datasource=data.educations;
      console.log(this.educationList);
    });

  }
  openDialog(id:string)
  {
    const dialogRef = this.dialog.open(DeleteeducationComponent, {
      width: '250px',
      data: {id:id}
    });
    this.id=id;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this._education.deleteEducation(this.id).subscribe(data=>{
          location.reload();
          console.log(data);

        })
        this._snackBar.open("Educated status is deleted.","Ok");
        location.reload();
      }

     // this.animal = result;
    });

  }


}
