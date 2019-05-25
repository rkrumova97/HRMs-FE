import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeComponent} from './employee.component';

// Modules
import {EmployeeRoutingModule} from './employee-routing.module';

@NgModule({
    declarations: [
      EmployeeComponent
    ],
    imports: [
        CommonModule,
      EmployeeRoutingModule
    ]
})
export class EmployeeModule {}
