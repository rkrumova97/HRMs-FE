import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './employee.component';

export class EmployeeRoutes {
  static employeeRoutes: Routes = [
    {
      path: '',
      component: EmployeeComponent,
      children: [
        {path: 'employee', component: EmployeeComponent}
      ],
    }
  ];
}

@NgModule({
  imports: [RouterModule.forChild(EmployeeRoutes.employeeRoutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
