import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Employee} from "../../../model/employee.model";
import {Position} from "../../../model/position.model";

@Component({
  selector: 'app-assign-employee',
  templateUrl: './assign-employee.component.html',
  styleUrls: ['./assign-employee.component.less']
})
export class AssignEmployeeComponent implements OnInit {
  employees: Employee[];
  employee: Employee;
  jobs: string[];
  http: HttpClient;
  router: Router;
  modalService: NgbModal;

  constructor(http: HttpClient, router: Router, modalService: NgbModal) {
    this.http = http;
    this.router = router;
    this.modalService = modalService;
  }

  ngOnInit() {
    this.http.get<Employee[]>('http://localhost:8000/api/employee').subscribe(res => {
      this.employees = res;
    });

    this.http.get<string[]>('http://localhost:8000/api/project').subscribe(res => {
      this.jobs = res;
      console.log(this.jobs);
    });
  }

  onSubmit(employee:Employee) {
    console.log(employee);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
      })
    };
    this.http.put<Employee>('http://localhost:8000/api/employee/'+employee.id, JSON.stringify(employee), httpOptions)
      .subscribe(r => {
        console.log(r);
        this.router.navigate(['/hr/project']);
      });
  }

}
