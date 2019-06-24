import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {ApplicationForVacation} from '../model/application-for-vacation.model';
import {Query} from "../../core/query.model";
import {Employee} from "../../hr/model/employee.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-application-for-vacation',
  templateUrl: './application-for-vacation.component.html',
  styleUrls: ['./application-for-vacation.component.less']
})
export class ApplicationForVacationComponent implements OnInit {
  employees: Employee[];
  http: HttpClient;
  router: Router;
  modalService: NgbModal;

  application: ApplicationForVacation;

  constructor(http: HttpClient, router: Router,modalService: NgbModal) {
    this.http = http;
    this.router = router;
    this.modalService = modalService;
  }

  ngOnInit() {
    this.application = new ApplicationForVacation(null, null, null, null);

    this.http.get<Employee[]>('http://localhost:8080/createApplication').subscribe(res => {
      this.employees = res;
    });
  }

  onSubmit() {
    console.log(this.application.hrName);
    console.log(JSON.stringify(this.application));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
      })
    };
    this.http.post<Query>('http://localhost:8080/createApplication', JSON.stringify(this.application), httpOptions)
      .subscribe(r => {
        console.log(r);
        this.router.navigate(['/employee']);
      });
  }

}
