import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  members = [
    { name: 'Ratnesh', id: 1, linkedIn: 'khjksjkhdhdjk', age: 27, intro: 'Hello I am Ratnesh. I am frontend Develper' },
    { name: 'Prem', id: 2, linkedIn: 'khjksjkhdhdjk', age: 27, intro: 'Hello I am Ratnesh. I am frontend Develper' },
    { name: 'Bhavna', id: 3, linkedIn: 'khjksjkhdhdjk', age: 27, intro: 'Hello I am Ratnesh. I am frontend Develper' },
  ]

  constructor() { }

  getMemberInfoById(id) {
    let mem = this.members.find((mem) => {
      return mem.id == id;
    });
    return of(mem);
  }
}
