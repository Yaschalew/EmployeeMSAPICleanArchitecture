import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileducationComponent } from './detaileducation.component';

describe('DetaileducationComponent', () => {
  let component: DetaileducationComponent;
  let fixture: ComponentFixture<DetaileducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaileducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaileducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
