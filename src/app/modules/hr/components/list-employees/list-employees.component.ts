import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.less']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  http: HttpClient;
  isClicked: boolean;
  router: Router;
  isPopped = true;

  constructor(http: HttpClient, router: Router) {
    this.http = http;
    this.router = router;
  }



  ngOnInit() {
    this.isClicked = true;
    this.http.get<Employee[]>('http://localhost:8080/employees').subscribe(res => {
      this.employees = res;
    });
  }

  toggle(employee): boolean {
    employee.show = !employee.show;
    return true;
  }

  updateList(employee: Employee, property: string, event: any) {
    employee[property] = event.target.textContent;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
      })
    };
    console.log(JSON.stringify(this.employees));
    this.http.post<Employee>('http://localhost:8080/employees', JSON.stringify(this.employees), httpOptions)
      .subscribe(r => {
        console.log(r);
      });
  }

  /*open(){
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(ModalAboutComponent);
    modalRef.componentInstance.title = 'About';
    console.log("Popped!");
  }*/


}
