import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreComponent} from './core.component';
import {ErrorComponent} from './components/error/error.component';

export class CoreRoutes {
  static coreRoutes: Routes = [
    {
      path: '',
      component: CoreComponent,
      children: [
        {path: 'core', component: CoreComponent},
      ]
    } ,
    {
      path: '**',
      component: ErrorComponent,
      children: [
        {path: '**', component: ErrorComponent},
      ]
    }
  ];
}

@NgModule({
  imports: [RouterModule.forChild(CoreRoutes.coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
