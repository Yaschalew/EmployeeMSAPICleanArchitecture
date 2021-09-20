
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PositionService } from './../../services/position.service';
import { FormGroup,FormBuilder,FormsModule} from '@angular/forms';

@Component({
  selector: 'app-position-edit',
  templateUrl: './position-edit.component.html',
  styleUrls: ['./position-edit.component.scss']
})
export class PositionEditComponent implements OnInit {
  forms : FormGroup;
  id:any;
  position:any;

  constructor(private router:Router,private fb: FormBuilder,private route: ActivatedRoute,private _positionService:PositionService) {
    this.forms=this.fb.group({name:'',salary:'',remark:''});
    this.id = this.route.snapshot.paramMap.get('id');
    this._positionService.getPositionId(this.id).subscribe((data:any)=>{
      this.position=data;
      this.patchValues(data);
      console.log(this.position.name);
    });
   }
   patchValues(data:any){
    this.forms.patchValue({
    name: data.name,
    salary: data.salary,
    remark:data.remark
 })


   }
   ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.forms.value);
    this._positionService.editPosition(this.forms.value,this.id).subscribe((data:any)=>{
      this.router.navigateByUrl("Positions");
    })

  }
 

}
