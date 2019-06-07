import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeComponent} from './employee.component';

// Modules
import {EmployeeRoutingModule} from './employee-routing.module';
import {CoreModule} from '../core';

@NgModule({
    declarations: [
      EmployeeComponent
    ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    CoreModule
  ],
  bootstrap: [EmployeeComponent]

})
export class EmployeeModule {}
