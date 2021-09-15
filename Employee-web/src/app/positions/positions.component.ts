import { PositionService } from './../services/position.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {
positionsList:any;
  constructor(private _positions:PositionService) { }

  ngOnInit(): void {
    this._positions.getPositions().subscribe((data:any)=>{
      this.positionsList=data.positions;
      console.log(this.positionsList);

    });
  }

}
