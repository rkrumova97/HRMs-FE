import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Employee} from '../../model/employee.model';
import {Query} from '../../../core/query.model';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hire-employee',
  templateUrl: './hire-employee.component.html',
  styleUrls: ['./hire-employee.component.less']
})
export class HireEmployeeComponent implements OnInit {

  grades: string[];
  http: HttpClient;
  skills: string[];
  employee: Employee;
  genders: string[];
  router: Router;
  dropdownSettings = {};

  // Forms validation
  addForm: FormGroup;
  submitted = false;
  isAdding = false;

  workingDays = [
    { name: 'Three days a week', value: 3 },
    { name: 'Four days a week', value: 4 },
    { name: 'Five days a week', value: 5 }
  ];
  workingHours = [
    { name: 'Four hours a day', value: 4 },
    { name: 'Six hours a day', value: 6 },
    { name: 'Eight hours a day', value: 8 }
  ];

  constructor(http: HttpClient, router: Router,
              private formBuilder: FormBuilder,
              private location: Location) {
    this.http = http;
    this.router = router;
  }

  ngOnInit() {
    // @ts-ignore
    this.employee = new Employee();

    this.genders = ['Male', 'Female', 'Other'];

    this.http.get<string[]>('http://localhost:8080/grades').subscribe(res => {
      this.grades = res;
      console.log(this.grades);
    });

    this.http.get<string[]>('http://localhost:8080/skills').subscribe(res => {
      this.skills = res;
      console.log(this.skills);
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

  cancelAdd() {
    this.location.back();
  }

  addEmployee(valid: boolean) {
    this.submitted = true;
    if (valid) {
      // this.isAdding = true;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json;charset=UTF-8',
        })
      };
      this.http.post<Query>('http://localhost:8080/hire', JSON.stringify(this.employee), httpOptions)
        .subscribe(r => {
          this.router.navigate(['/hr']);
        });
    }
  }
}
