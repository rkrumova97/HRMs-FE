import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveSalaryComponent } from './give-salary.component';

describe('GiveSalaryComponent', () => {
  let component: GiveSalaryComponent;
  let fixture: ComponentFixture<GiveSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
