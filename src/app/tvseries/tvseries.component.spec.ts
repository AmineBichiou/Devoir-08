import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVseriesComponent } from './tvseries.component';

describe('TVseriesComponent', () => {
  let component: TVseriesComponent;
  let fixture: ComponentFixture<TVseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVseriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
