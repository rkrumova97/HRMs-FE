import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/employee.model';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.less']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
    this.http.get<Employee[]>('http://localhost:8080/employees').subscribe(res => {
      this.employees = res;
      console.log(this.employees);
    });
  }

}
