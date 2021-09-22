import { PositionService } from './../services/position.service';
import { Component, OnInit } from '@angular/core';
import { PositionDeleteComponent } from './position-delete/position-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {
displayedColumns: string[] = ['name', 'salary', 'remark','action'];
positionsList:any;
dataSource:any;
id:any;
  constructor(private _snackBar:MatSnackBar, private _positions:PositionService,public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this._positions.getPositions().subscribe((data:any)=>{
      this.positionsList=data.positions;
      this.dataSource=data.positions;
      console.log(this.positionsList);

    });
  }

  openDialog(id:string): void {
    const dialogRef = this.dialog.open(PositionDeleteComponent, {
      width: '250px',
      data: {id:id}
    });
    this.id=id;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this._positions.deletePosition(this.id).subscribe(data=>{          
          location.reload();
          console.log(data);
          
        })
        this._snackBar.open("Position is deleted.","Ok");
        location.reload();
      }
     
     // this.animal = result;
    });
  }

}
