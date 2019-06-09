import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreComponent} from './core.component';
import {CoreRoutingModule} from './core-routing.module';
import {NavigationComponent} from './components/navigation/navigation.component';
import {ErrorComponent} from './components/error/error.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [CoreComponent, NavigationComponent, ErrorComponent],
  exports: [
    CoreComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [CoreComponent]

})
export class CoreModule {
}
