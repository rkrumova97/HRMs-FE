import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/employee.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fire-employee',
  templateUrl: './fire-employee.component.html',
  styleUrls: ['./fire-employee.component.less']
})
export class FireEmployeeComponent implements OnInit {

  employees: Employee[];
  http: HttpClient;
  isClicked: boolean;

  constructor(http: HttpClient) {
    this.http = http;
  }
  ngOnInit() {
    this.isClicked = true;
    this.http.get<Employee[]>('http://localhost:8080/employees').subscribe(res => {
      this.employees = res;
      console.log(this.employees);
    });
  }
  toggle(employee): boolean {
    employee.show = !employee.show;
    return  true;
  }
  updateList(employee: Employee, property: string, event: any) {
    employee[property] = event.target.textContent;
    console.log(this.employees);
  }

  delete(employee: Employee) {
    
  }
}
