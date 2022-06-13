import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Employee} from '../../model/employee.model';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Router} from "@angular/router";

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

function search(employees: Employee[], text: string): Employee[] {
  return employees.filter(employee => {
    const term = text.toLowerCase();
    return employee.firstName.toLowerCase().includes(term);
  });
}

@Component({
  selector: 'app-give-salary',
  templateUrl: './give-salary.component.html',
  styleUrls: ['./give-salary.component.less']
})
export class GiveSalaryComponent implements OnInit {

  employees$: Observable<Employee[]>;
  filter = new FormControl('');
  router: Router;

  constructor(http: HttpClient, router: Router ) {
    this.http = http;
    this.router = router;
  }

  positions: any[];
  grade: any;
  position: any;
  http: HttpClient;
  employees: Employee[] = [];

  headElements = ['ID', 'First Name', 'Middle Name', 'Last Name', 'Job Type', 'Salary'];

  searchText = '';

  dataSource: any;

  ngOnInit() {
    this.grade = 'Grade';
    this.position = 'Position';


    this.http.get<Employee[]>('http://localhost:8000/api/employee').subscribe(res => {
      this.employees = res;
      console.log(this.employees);
    });

    this.employees$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text))
    );
  }

  search(text: string): Employee[] {
    return this.employees.filter(employee => {
      const term = text.toLowerCase();
      console.log(employee.firstName);
      console.log(term);
      return employee.firstName.toLowerCase().includes(term)
        || employee.middleName.toLowerCase().includes(term)
        || employee.lastName.toLowerCase().includes(term);
    });
  }

  updateList(employee: Employee, property: string, event: any) {
    employee[property] = event.target.textContent;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
      })
    };
    console.log(JSON.stringify(this.employees));
    this.http.put<Employee>('http://localhost:8000/api/employee/'+employee.id, JSON.stringify(employee), httpOptions)
      .subscribe(r => {
        console.log(r);
      });
  }

  excel() {
    this.http.get('http://localhost:8000/api/salary').subscribe(res => console.log(res), error => {console.log(error)});
    this.http.get('http://localhost:8000/api/salary/salaryEmail').subscribe(res => {
      console.log(res);
      this.router.navigate(['/hr']);
    });
  }

}

