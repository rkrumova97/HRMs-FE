import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Components
import { HrComponent } from './hr.component';

// Modules
import {HrRoutingModule} from './hr-routing.module';
import {CoreModule} from '../core';
import {FormsModule} from "@angular/forms";
import { HireEmployeeComponent } from './components/hire-employee/hire-employee.component';
import { InterviewPersonComponent } from './components/interview-person/interview-person.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { FireEmployeeComponent } from './components/fire-employee/fire-employee.component';
import { GiveSalaryComponent } from './components/give-salary/give-salary.component';

@NgModule({
  declarations: [
    HrComponent,
    HireEmployeeComponent,
    InterviewPersonComponent,
    ListEmployeesComponent,
    FireEmployeeComponent,
    GiveSalaryComponent,
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    CoreModule,
    FormsModule
  ],
  bootstrap: [HrComponent]
})
export class HrModule { }

