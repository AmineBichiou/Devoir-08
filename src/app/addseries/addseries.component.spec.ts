import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddseriesComponent } from './addseries.component';

describe('AddseriesComponent', () => {
  let component: AddseriesComponent;
  let fixture: ComponentFixture<AddseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddseriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
