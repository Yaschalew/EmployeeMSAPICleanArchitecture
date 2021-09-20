import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PositionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-position-detail',
  templateUrl: './position-detail.component.html',
  styleUrls: ['./position-detail.component.scss']
})
export class PositionDetailComponent implements OnInit {
 forms:FormGroup;
 id:any;
 position:any;
  constructor(private router:Router,private fb: FormBuilder,private route: ActivatedRoute,private _positionService:PositionService) {
    this.forms=this.fb.group({
      name:'',
      salary:'',
      remark:''
    });
    this.id = this.route.snapshot.paramMap.get('id');
    this._positionService.getPositionId(this.id).subscribe((data:any)=>{
      this.position=data;
      this.patchValues(data);
     
    });
   }
   patchValues(data: any) {
    this.forms.patchValue({
      name: data.name,
      salary: data.salary,
      remark:data.remark
   })
  }
  onSubmit(){
    this.router.navigateByUrl("Positions");
  }
  

  ngOnInit(): void {
  }

}
