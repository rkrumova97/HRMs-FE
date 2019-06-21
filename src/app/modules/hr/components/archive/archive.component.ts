import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/employee.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.less']
})
export class ArchiveComponent implements OnInit {

  employees: Employee[];
  http: HttpClient;
  isClicked: boolean;
  router: Router;

  constructor(http: HttpClient, router: Router) {
    this.http = http;
    this.router = router;
  }

  ngOnInit() {
    this.isClicked = true;
    this.http.get<Employee[]>('http://localhost:8080/archive').subscribe(res => {
      this.employees = res;
    });
  }

}
