import {Component, ElementRef, OnInit, Output, ViewChild} from '@angular/core';
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
    this.employee = new Employee();
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get<Employee>('http://localhost:8000/api/employee/' + this.id).subscribe(res => {
      this.employee = res;
      console.log(this.employee);
    });
  }

}
