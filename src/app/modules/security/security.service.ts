import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8000/api/';

  login(loginPayload) {
    const headers = {
      Authorization: 'Basic ' + btoa('4:V6uUOfdzLjxE2VDCqPElTC1Iu2bAP2DEaVuNk1bE'),
      'Content-type': 'application/x-www-form-urlencoded'
    };
    console.log(loginPayload);
    return this.http.post('http://localhost:8000/' + 'oauth/token', loginPayload, {headers});
  }

  getUsers() {
    return this.http.get(this.baseUrl + 'user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  getUserById(id: number) {
    return this.http.get(this.baseUrl + 'user/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }}
