import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Components
import { HrComponent } from './hr.component';

// Modules
import {HrRoutingModule} from './hr-routing.module';
import {CoreModule} from '../core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HireEmployeeComponent } from './components/hire-employee/hire-employee.component';
import { InterviewPersonComponent } from './components/interview-person/interview-person.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { FireEmployeeComponent } from './components/fire-employee/fire-employee.component';
import { GiveSalaryComponent } from './components/give-salary/give-salary.component';
import { VacationComponent } from './components/vacation/vacation.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';

@NgModule({
  declarations: [
    HrComponent,
    HireEmployeeComponent,
    InterviewPersonComponent,
    ListEmployeesComponent,
    FireEmployeeComponent,
    GiveSalaryComponent,
    VacationComponent,
    EmployeeProfileComponent,
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  bootstrap: [HrComponent]
})
export class HrModule { }

