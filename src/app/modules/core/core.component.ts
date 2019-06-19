import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Query} from './query.model';

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

  quer = new Query(null, null);

  number: number;

  onSubmit() {
    console.log(this.quer);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    this.http.post<Query>('http://localhost:8080/skillsee', JSON.stringify(this.quer), httpOptions)
      .subscribe(r => JSON.stringify(this.quer));
  }
}
