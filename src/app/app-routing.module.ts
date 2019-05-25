import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import {HrComponent} from './modules/hr';
// import {EmployeeComponent} from './modules/employee';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/hr/hr.module#HrModule'
  },
  {
    path: 'employee',
    loadChildren: './modules/employee/employee.module#EmployeeModule'
  },
  // { path: '', component: HrComponent },
  // { path: 'home', component: HrComponent },
  // { path: 'employee', component: EmployeeHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
