import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
forms:FormGroup;
  constructor(fb: FormBuilder) {
    this.forms=fb.group({
      name:'',
      phone:'',
      email:''
    });
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("register")
  }
}
