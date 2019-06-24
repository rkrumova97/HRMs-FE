import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Query} from '../../../core/query.model';
import {PersonModel} from '../../model/person.model';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-interview-person',
  templateUrl: './interview-person.component.html',
  styleUrls: ['./interview-person.component.less'],
})
export class InterviewPersonComponent implements OnInit {

  person: PersonModel;
  genders: string[];

  // Forms validation
  submitted = false;
  isAdding = false;

  interviewInvite: any;


  constructor(private router: Router,
              private http: HttpClient,
              private formBuilder: FormBuilder,
              private location: Location,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    if (!this.person) {
      this.person = new PersonModel();
    }

    this.genders = ['Male', 'Female', 'Other'];
  }

  cancelAdd() {
    this.location.back();
  }

  addPerson(valid: boolean) {
    this.submitted = true;
    if (valid) {
      this.isAdding = true;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json;charset=UTF-8',
        })
      };
      this.http.post<Query>('http://localhost:8080/addPerson', JSON.stringify(this.person), httpOptions)
        .subscribe(r => {

          this.interviewInvite = {
            email: this.person.email,
            interviewDate: this.person.interviewDate,
            name: this.person.firstName + ' ' + this.person.middleName + ' ' + this.person.lastName};

          this.toastr.success('Person is added successfully!', 'Success');

          this.http.post<Query>('http://localhost:8080/sendInterviewInvite', JSON.stringify(this.interviewInvite), httpOptions)
            .subscribe(innerR => {
              this.router.navigate(['/hr']);
            },
              error => {
                this.isAdding = false;
                this.toastr.error(error, 'Something went wrong!');
              });
        },
          error => {
            this.isAdding = false;
            this.toastr.error(error, 'Something went wrong!');
          });
    }
  }

}
