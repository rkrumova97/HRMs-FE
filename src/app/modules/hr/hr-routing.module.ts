import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HrComponent} from './hr.component';
import {HireEmployeeComponent} from "./hire-employee/hire-employee.component";
import {InterviewPersonComponent} from "./interview-person/interview-person.component";

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
    }
  ];
}

@NgModule({
  imports: [RouterModule.forChild(HrRoutes.hrRoutes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
