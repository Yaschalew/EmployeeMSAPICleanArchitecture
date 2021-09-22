
import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeService } from '../services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined ;
  displayedColumns: string[] = ['roNo','fname','lname','mname','birthDate', 'phone', 'email','address','hiredAt','status','action'];
  dataSource : any;
id:any;
idParam:string ='';
length = 1002;
pageSize = 5;
pageIndex=0;
searchKey:string='';
clearSearch:Boolean=false;
pageSizeOptions: number[] = [this.pageSize, 10, 25, 100];

// MatPaginator Output
pageEvent: PageEvent | undefined;
  constructor(private _snackBar: MatSnackBar,private _employees:EmployeeService,public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
   this.fetchEmployee();
  }
  clearText(){
    this.searchKey='';
    this.clearSearch=false;
    this.fetchEmployee();

  }
  onPaginateChange($event:any){
    console.log($event);
    this.pageIndex=$event.pageIndex;
    this.pageSize=$event.pageSize;
    this.fetchEmployee();
  }
  fetchEmployee(){
    this._employees.getEmployees(this.idParam,this.searchKey, this.pageIndex, this.pageSize).subscribe((data:any)=>{
      this.dataSource=data.data;
      console.log("data");
      this.length=data.totalRowCount;
      console.log(data);
      console.log("data");
    });
  }
   yourMethodToTrigger(){
   console.log('Triggered!')
   }
   searchEmployee(){
     if(this.searchKey!=''){
       this.clearSearch=true;
     }
    else{
         this.clearSearch=false;
     }
    this.fetchEmployee();
    
   }
   openAddDialog(): void {
    const dialogRef = this.dialog.open(EmployeeAddComponent, {
      width: '40%',
     
    });
  
    
  }
  openDialog(id:string): void {
    const dialogRef = this.dialog.open(EmployeeDeleteComponent, {
      width: '250px',
      data: {id:id}
    });
    this.id=id;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this._employees.deleteEmployee(this.id).subscribe(data=>{
          location.reload();
          console.log(data);

        })
        this._snackBar.open("Employee is deleted.","Ok");
        location.reload();
      }

     // this.animal = result;
    });
    
  }
}
