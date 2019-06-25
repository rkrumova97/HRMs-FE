import {Component, OnInit} from '@angular/core';
import {Position} from '../../../model/position.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.less']
})
export class AddPositionComponent implements OnInit {

  position: Position;
  departments: any[];
  dropdownSettings = {};
  dropdownSettingsD = {};
  http: HttpClient;
  router: Router;

  constructor(http: HttpClient, router: Router, private toastr: ToastrService) {
    this.http = http;
    this.router = router;
  }

  ngOnInit() {
    this.position = new Position();

    this.http.get<string[]>('http://localhost:8080/departments').subscribe(res => {
      this.departments = res;
      console.log(this.departments);
    });
  }

  onSubmit() {
    console.log(JSON.stringify(this.position));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
      })
    };
    this.http.post<Position>('http://localhost:8080/position', JSON.stringify(this.position), httpOptions)
      .subscribe(r => {
        console.log(r);
        this.router.navigate(['/hr']);
        this.toastr.success('Position is saved!', 'Success');
      });
  }
}
