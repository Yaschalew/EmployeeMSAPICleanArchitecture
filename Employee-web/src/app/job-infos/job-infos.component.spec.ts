import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobInfosComponent } from './job-infos.component';

describe('JobInfosComponent', () => {
  let component: JobInfosComponent;
  let fixture: ComponentFixture<JobInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
