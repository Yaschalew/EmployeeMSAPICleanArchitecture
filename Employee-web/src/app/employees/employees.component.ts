import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phone', 'email','action'];
  dataSource : any;
employeesList:any;
id:any;
  constructor(private _snackBar: MatSnackBar,private _employees:EmployeeService,public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this._employees.getEmployees().subscribe((data:any)=>{
      this.employeesList=data.employees;
      this.dataSource=data.employees;
      console.log(this.employeesList);
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
