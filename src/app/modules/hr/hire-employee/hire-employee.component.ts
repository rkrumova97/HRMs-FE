import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-hire-employee',
  templateUrl: './hire-employee.component.html',
  styleUrls: ['./hire-employee.component.less']
})
export class HireEmployeeComponent implements OnInit {

  grades: string[];
  http: HttpClient;
  skills: string[];
  selectedItems = [];
  dropdownSettings = {};

  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
     this.http.get<string[]>('http://localhost:8080/grades').subscribe(res => {
      this.grades = res;
      console.log(this.grades);
    });

     this.http.get<string[]>('http://localhost:8080/skills').subscribe(res => {
      this.skills = res;
      console.log(this.skills);
    });

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

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
