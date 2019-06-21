import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HrComponent} from './hr.component';
import {HireEmployeeComponent} from './components/hire-employee/hire-employee.component';
import {InterviewPersonComponent} from './components/interview-person/interview-person.component';
import {FireEmployeeComponent} from "./components/fire-employee/fire-employee.component";
import {GiveSalaryComponent} from "./components/give-salary/give-salary.component";
import {ListEmployeesComponent} from "./components/list-employees/list-employees.component";
import {EmployeeProfileComponent} from "./components/employee-profile/employee-profile.component";
import {ArchiveComponent} from "./components/archive/archive.component";

export class HrRoutes {
  static hrRoutes: Routes = [
    {
      path: '',
      component: HrComponent,
      children: [
        {path: 'hr', component: HrComponent}
      ],
    },
    {
      path: 'hire',
      component: HireEmployeeComponent,
      children: [
        {path: 'hr', component: HrComponent}
      ],
    },
    {
      path: 'interview',
      component: InterviewPersonComponent,
      children: [
        {path: 'hr', component: HrComponent}
      ],
    },
    {
      path: 'fire',
      component: FireEmployeeComponent,
      children: [
        {path: 'hr', component: HrComponent}
      ],
    },
    {
      path: 'list',
      component: ListEmployeesComponent,
      children: [
        {path: 'hr', component: HrComponent}
      ],
    },
    {
      path: 'salary',
      component: GiveSalaryComponent,
      children: [
        {path: 'hr', component: HrComponent}
      ],
    },
    {
      path: 'profile/:id',
      component: EmployeeProfileComponent,
      children: [
        {path: 'hr', component: HrComponent}
      ],
    },
    {
      path: 'archive',
      component: ArchiveComponent,
      children: [
        {path: 'hr', component: HrComponent}
      ],
    }
  ];
}

@NgModule({
  imports: [RouterModule.forChild(HrRoutes.hrRoutes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
