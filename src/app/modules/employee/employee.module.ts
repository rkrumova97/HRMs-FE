import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeComponent} from './employee.component';

// Modules
import {EmployeeRoutingModule} from './employee-routing.module';
import {CoreModule} from '../core';
import { ApplicationForVacationComponent } from './application-for-vacation/application-for-vacation.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
      EmployeeComponent,
      ApplicationForVacationComponent
    ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    CoreModule,
    FormsModule
  ],
  bootstrap: [EmployeeComponent]

})
export class EmployeeModule {}
