import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private http: HttpClient) { 
  }

  name = 'Ratnesh';
  cart = 0;

  getData(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    // observer => data watch => data recieved => observer notifies everyone who wants this data
  }
}