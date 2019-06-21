import {Component} from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent {

  modal: NgbActiveModal;
  constructor(modal: NgbActiveModal) {
    this.modal = modal;
  }

}
