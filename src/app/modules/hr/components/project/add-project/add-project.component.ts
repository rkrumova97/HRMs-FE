import {Component, OnInit} from '@angular/core';
import {Project} from '../../../model/project.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Query} from "../../../../core/query.model";
import {Route, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.less']
})
export class AddProjectComponent implements OnInit {

  project: Project;
  skills = [{name: 'Management', value: 'Management'},
    {name: 'Teamwork', value: 'Teamwork'}];
  positions: any[];
  departments = [{name: 'Software development', value: 'dev'},
    {name: 'QA', value: 'QA'}];
  http: HttpClient;
  dropdownSettings: {};
  router: Router;

  constructor(http: HttpClient, router: Router, private toastr: ToastrService) {
    this.http = http;
    this.router = router;
  }

  ngOnInit() {
    this.project = new Project();

    this.http.get<string[]>('http://localhost:8000/api/position').subscribe(res => {
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
    this.http.post<Query>('http://localhost:8000/api/project', JSON.stringify(this.project), httpOptions)
      .subscribe(r => {
        console.log(r);
        this.router.navigate(['/hr']);
        this.toastr.success('Project is saved!', 'Success');
      });
  }
}
