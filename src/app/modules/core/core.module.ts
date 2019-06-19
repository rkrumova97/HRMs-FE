import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreComponent} from './core.component';
import {CoreRoutingModule} from './core-routing.module';
import {NavigationComponent} from './components/navigation/navigation.component';
import {ErrorComponent} from './components/error/error.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [CoreComponent, NavigationComponent, ErrorComponent, FooterComponent],
  exports: [
    CoreComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: [CoreComponent]

})
export class CoreModule {
}
