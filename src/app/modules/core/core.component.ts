import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.less']
})
export class CoreComponent {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getHelloWorld() {
    const requestOptions: object = {
      /* other options here */
      responseType: 'text'
    }
    return this.http.get<any>('http://localhost:8080/hello', requestOptions).subscribe(d => console.log(d));
  }

}
