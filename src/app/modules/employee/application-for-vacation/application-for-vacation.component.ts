import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {ApplicationForVacation} from '../model/application-for-vacation.model';
import {Query} from "../../core/query.model";

@Component({
  selector: 'app-application-for-vacation',
  templateUrl: './application-for-vacation.component.html',
  styleUrls: ['./application-for-vacation.component.less']
})
export class ApplicationForVacationComponent implements OnInit {
  http: HttpClient;
  router: Router;

  application: ApplicationForVacation;

  constructor(http: HttpClient, router: Router) {
    this.http = http;
    this.router = router;
  }

  ngOnInit() {
    this.application = new ApplicationForVacation(null, null);
  }

  onSubmit() {
    console.log(JSON.stringify(this.application));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
      })
    };
    this.http.post<Query>('http://localhost:8080/createApplication', JSON.stringify(this.application), httpOptions)
      .subscribe(r => {
        console.log(r);
        this.router.navigate(['/hr']);
      });
  }

}
