import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HrComponent} from './hr.component';

export class HrRoutes {
  static hrRoutes: Routes = [
    {
      path: '',
      component: HrComponent,
      children: [
        {path: 'home', component: HrComponent}
      ],
    }
  ];
}

@NgModule({
  imports: [RouterModule.forChild(HrRoutes.hrRoutes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
