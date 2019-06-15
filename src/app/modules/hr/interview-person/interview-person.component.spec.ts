import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewPersonComponent } from './interview-person.component';

describe('InterviewPersonComponent', () => {
  let component: InterviewPersonComponent;
  let fixture: ComponentFixture<InterviewPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
