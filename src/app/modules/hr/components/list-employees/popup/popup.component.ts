import {Component, Input} from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Employee} from "../../../model/employee.model";
import {__makeTemplateObject} from "tslib";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent {

  modal: NgbActiveModal;

  @Input() firstName;
  @Input() middleName;
  @Input() lastName;
  @Input() id;


  constructor(modal: NgbActiveModal) {
    this.modal = modal;
  }

  fire(id:number) {
    id=this.id;
    console.log(id);
  }
}
