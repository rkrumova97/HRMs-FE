import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/security/security.module#SecurityModule'
  },
  {
    path: 'employee',
    loadChildren: './modules/employee/employee.module#EmployeeModule'
  },
  {
    path: 'core',
    loadChildren: './modules/core/core.module#CoreModule'
  },
  {
    path: 'hr',
    loadChildren: './modules/hr/hr.module#HrModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
