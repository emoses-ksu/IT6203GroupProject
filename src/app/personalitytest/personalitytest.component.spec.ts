import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalitytestComponent } from './personalitytest.component';

describe('PersonalitytestComponent', () => {
  let component: PersonalitytestComponent;
  let fixture: ComponentFixture<PersonalitytestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalitytestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalitytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
