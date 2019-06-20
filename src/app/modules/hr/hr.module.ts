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
import { ProjectComponent } from './components/project/project.component';
import { AddProjectComponent } from './components/project/add-project/add-project.component';
import {NgbTabsetModule} from "@ng-bootstrap/ng-bootstrap";
import { AddPositionComponent } from './components/project/add-position/add-position.component';
import { AssignEmployeeComponent } from './components/project/assign-employee/assign-employee.component';
import {NgbdModalBasicModule} from "./components/list-employees/popup/popup.component.spec";
//import { PopupComponent } from './components/list-employees/popup/popup.component';

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
    ProjectComponent,
    AddProjectComponent,
    AddPositionComponent,
    AssignEmployeeComponent,
    //PopupComponent,
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbTabsetModule,
    NgbdModalBasicModule
  ],
  bootstrap: [HrComponent]
})
export class HrModule { }

