import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Query} from '../../../core/query.model';
import {PersonModel} from '../../model/person.model';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-interview-person',
  templateUrl: './interview-person.component.html',
  styleUrls: ['./interview-person.component.less'],
})
export class InterviewPersonComponent implements OnInit {

  person: PersonModel;
  genders: string[];

  // Forms validation
  addForm: FormGroup;
  submitted = false;
  isAdding = false;


  constructor(private router: Router,
              private http: HttpClient,
              private formBuilder: FormBuilder,
              private location: Location) {
  }

  ngOnInit() {
    if (!this.person) {
      this.person = new PersonModel();
    }
    // this.setValidation();

    this.genders = ['Male', 'Female', 'Other'];
  }

  setValidation() {
    this.addForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        middleName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
      },
      {
        updateOn: 'blur'
      });
  }

  cancelAdd() {
    this.location.back();
  }

  addPerson(valid: boolean) {
    this.submitted = true;
    if (valid) {
      console.log(this.person);
      this.isAdding = true;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json;charset=UTF-8',
        })
      };
      this.http.post<Query>('http://localhost:8080/addPerson', JSON.stringify(this.person), httpOptions)
        .subscribe(r => {
          this.router.navigate(['/hr']);
        });
    }
  }

}
