import {Component, OnInit} from '@angular/core';
import {Project} from '../../../model/project.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Query} from "../../../../core/query.model";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.less']
})
export class AddProjectComponent implements OnInit {

  project: Project;
  skills: any[];
  grades: any[];
  positions: any[];
  departments: any[];
  http: HttpClient;
  dropdownSettings: {};
  router: Router;

  constructor(http: HttpClient, router: Router) {
    this.http = http;
    this.router = router;
  }

  ngOnInit() {
    this.project = new Project();
    this.http.get<string[]>('http://localhost:8080/grades').subscribe(res => {
      this.grades = res;
      console.log(this.grades);
    });

    this.http.get<string[]>('http://localhost:8080/departments').subscribe(res => {
      this.departments = res;
      console.log(this.departments);
    });

    this.http.get<string[]>('http://localhost:8080/skills').subscribe(res => {
      this.skills = res;
      console.log(this.skills);
    });

    this.http.get<string[]>('http://localhost:8080/positions').subscribe(res => {
      this.positions = res;
      console.log(this.positions);
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onSubmit() {
    console.log(JSON.stringify(this.project));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
      })
    };
    this.http.post<Query>('http://localhost:8080/project', JSON.stringify(this.project), httpOptions)
      .subscribe(r => {
        console.log(r);
        this.router.navigate(['/hr']);
      });
  }
}
