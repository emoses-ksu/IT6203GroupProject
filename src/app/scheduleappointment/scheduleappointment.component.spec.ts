import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleappointmentComponent } from './scheduleappointment.component';

describe('ScheduleappointmentComponent', () => {
  let component: ScheduleappointmentComponent;
  let fixture: ComponentFixture<ScheduleappointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleappointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
