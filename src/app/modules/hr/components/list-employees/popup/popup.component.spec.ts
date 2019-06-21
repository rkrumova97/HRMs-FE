import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalBasic } from './popup.component';

@NgModule({
  imports: [NgbModule],
  declarations: [NgbdModalBasic],
  exports: [NgbdModalBasic],
  bootstrap: [NgbdModalBasic]
})
export class NgbdModalBasicModule {}
