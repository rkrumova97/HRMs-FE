import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../model/employee.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PopupComponent} from './popup/popup.component';
import {last} from "rxjs/operators";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.less']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  http: HttpClient;
  employee: Employee;
  isClicked: boolean;
  router: Router;
  modalService: NgbModal;


  constructor(http: HttpClient, router: Router, modalService: NgbModal) {
    this.http = http;
    this.router = router;
    this.modalService = modalService;
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

  open(firstName, middleName, lastName, id) {
    const modalRef = this.modalService.open(PopupComponent, {centered:true});
    modalRef.componentInstance.firstName = firstName;
    modalRef.componentInstance.middleName = middleName;
    modalRef.componentInstance.lastName = lastName;
    modalRef.componentInstance.id = id;
  }
}
