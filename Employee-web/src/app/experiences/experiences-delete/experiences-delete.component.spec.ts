import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesDeleteComponent } from './experiences-delete.component';

describe('ExperiencesDeleteComponent', () => {
  let component: ExperiencesDeleteComponent;
  let fixture: ComponentFixture<ExperiencesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
