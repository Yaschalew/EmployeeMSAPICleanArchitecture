import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAttendanceFormComponent } from './my-attendance-form.component';

describe('MyAttendanceFormComponent', () => {
  let component: MyAttendanceFormComponent;
  let fixture: ComponentFixture<MyAttendanceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAttendanceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAttendanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
