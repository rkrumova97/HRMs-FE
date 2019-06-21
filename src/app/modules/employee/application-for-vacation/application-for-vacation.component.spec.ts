import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationForVacationComponent } from './application-for-vacation.component';

describe('ApplicationForVacationComponent', () => {
  let component: ApplicationForVacationComponent;
  let fixture: ComponentFixture<ApplicationForVacationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationForVacationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationForVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
