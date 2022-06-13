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
  departments  =
    [{name: 'Software development', value: 'dev'},
      {name: 'QA', value: 'QA'}];

  dropdownSettings = {};
  http: HttpClient;
  router: Router;

  constructor(http: HttpClient, router: Router, private toastr: ToastrService) {
    this.http = http;
    this.router = router;
  }

  ngOnInit() {
    this.position = new Position();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onSubmit() {
    console.log(JSON.stringify(this.position));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
      })
    };
    this.http.post<Position>('http://localhost:8000/api/position', JSON.stringify(this.position), httpOptions)
      .subscribe(r => {
        console.log(r);
        this.router.navigate(['/hr']);
        this.toastr.success('Position is saved!', 'Success');
      });
  }
}
