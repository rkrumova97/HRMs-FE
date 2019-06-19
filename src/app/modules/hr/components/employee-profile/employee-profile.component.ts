import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Employee} from '../../model/employee.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.less']
})
export class EmployeeProfileComponent implements OnInit {

  id: string;
  employee: Employee;
  http: HttpClient;
  constructor(private route: ActivatedRoute, http: HttpClient) { this.http = http; }

  ngOnInit() {
    this.employee = new Employee(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get<Employee>('http://localhost:8080/profile/' + this.id).subscribe(res => {
      this.employee = res;
      console.log(this.employee);
    });
  }

}
