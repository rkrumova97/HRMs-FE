import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgModule} from '@angular/core';
import {CoreModule} from './modules/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PopupComponent} from "./modules/hr/components/list-employees/popup/popup.component";
import {PopupModule} from "ng2-opd-popup";
import {HrModule} from "./modules/hr";

@NgModule({
  declarations: [
    AppComponent,

  ],
  entryComponents:[PopupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule,
    HrModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
