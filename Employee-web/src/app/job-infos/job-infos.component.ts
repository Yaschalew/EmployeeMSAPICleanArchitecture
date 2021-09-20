import { Component, OnInit } from '@angular/core';
import { JobInfoService } from '../services/job-info.service';

@Component({
  selector: 'app-job-infos',
  templateUrl: './job-infos.component.html',
  styleUrls: ['./job-infos.component.scss']
})
export class JobInfosComponent implements OnInit {
  displayedColumns: string[] = ['roNo','name','position','role','salary','applyAt',
  'hiredAt','status','action'];
  dataSource : any;
  constructor(private _jobInfoService:JobInfoService) { }

  ngOnInit(): void {
    this._jobInfoService.getJobInfos().subscribe((data:any)=>{
      this.dataSource=data.jobInformation;
      console.log(this.dataSource);
    })
  }

}
