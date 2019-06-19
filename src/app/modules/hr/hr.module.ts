import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Components
import { HrComponent } from './hr.component';

// Modules
import {HrRoutingModule} from './hr-routing.module';
import {CoreModule} from '../core';
import {FormsModule} from '@angular/forms';
import { HireEmployeeComponent } from './hire-employee/hire-employee.component';
import { InterviewPersonComponent } from './interview-person/interview-person.component';
import { NavbarComponent } from './interview-person/navbar/navbar.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { FireEmployeeComponent } from './components/fire-employee/fire-employee.component';
import { GiveSalaryComponent } from './components/give-salary/give-salary.component';
import { VacationComponent } from './components/vacation/vacation.component';

@NgModule({
  declarations: [
    HrComponent,
    HireEmployeeComponent,
    InterviewPersonComponent,
    NavbarComponent
    ListEmployeesComponent,
    FireEmployeeComponent,
    GiveSalaryComponent,
    VacationComponent,
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    CoreModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  bootstrap: [HrComponent]
})
export class HrModule { }

