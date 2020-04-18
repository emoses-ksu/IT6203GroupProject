import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursLocationsComponent } from './hours-locations.component';

describe('HoursLocationsComponent', () => {
  let component: HoursLocationsComponent;
  let fixture: ComponentFixture<HoursLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
