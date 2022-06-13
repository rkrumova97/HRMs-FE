import {Component, Input} from '@angular/core';

import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Employee} from "../../../model/employee.model";
import {__makeTemplateObject} from "tslib";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Query} from "../../../../core/query.model";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent {

  modal: NgbActiveModal;

  employees: Employee[];
  http: HttpClient;
  employee: Employee;
  router: Router;


  @Input() firstName;
  @Input() middleName;
  @Input() lastName;
  @Input() id;


  constructor(http: HttpClient,  router: Router,modal: NgbActiveModal) {
    this.http = http;
    this.router = router;
    this.modal = modal;
  }

  fire(id:number) {
    console.log(id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
      })
    };
    this.http.delete('http://localhost:8000/api/employee/'+id, httpOptions)
      .subscribe(r => {
        console.log(r);
        // this.router.navigate(['/hr/list']);

      });
    // this.modal.close();
    // window.location.reload();
  }
}
