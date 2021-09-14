import { Router } from '@angular/router';
import { PositionService } from './../../services/position.service';
import { FormGroup,FormBuilder,FormsModule} from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-position-add',
  templateUrl: './position-add.component.html',
  styleUrls: ['./position-add.component.scss']
})
export class PositionAddComponent implements OnInit {
forms:FormGroup;
constructor(fb: FormBuilder,private _positions:PositionService,private router:Router ) {
  this.forms=fb.group({
    name:'',
    salary:'',
    remark:''
  });
 }
 position:any
 id:string="";

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("Position register")
    //console.log(this.forms);
    if(this.position==null){
    this._positions.addPositon(this.forms.value).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl("Positions");
    });
  }
  else{
    this._positions.editPosition(this.forms.value,this.id).subscribe(data=>{
      console.log('update');
    })
  }

  }

}
