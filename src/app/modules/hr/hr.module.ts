import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Components
import { HrComponent } from './hr.component';

// Modules
import {HrRoutingModule} from './hr-routing.module';
import {CoreModule} from '../core';

@NgModule({
  declarations: [
    HrComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    CoreModule
  ],
  bootstrap: [HrComponent]
})
export class HrModule { }

