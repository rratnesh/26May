import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = {
    email: 'ratnesh@gmail.com',
    name: 'Ratnesh Kumar Singh'
  }

  active = false;
  array = [];

  ngOnInit() {
  }

  changeActive(arr){
    this.array = arr;
    this.active = !this.active;
  }

  changeMyName(){
    this.user.name = 'Dhruva Singh';
  }
}
