import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl= "http://127.0.0.1:8000"
  httpHeaders = new HttpHeaders({'content-type':'application/json'})
  constructor(private http: HttpClient) { }

  getAllFoods(): Observable<any> {
    return this.http.get(this.baseurl + '/foods/',
    {headers: this.httpHeaders})
  }
  getOneFood(id:any): Observable<any> {
    return this.http.get(this.baseurl + '/foods/' + id + '/',
    {headers: this.httpHeaders})
  }
}
