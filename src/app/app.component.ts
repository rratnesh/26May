import { Component } from '@angular/core';
import { NewService } from './services/new.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arr = ['abs', 'def'];
  arr2 = [];


  obj = {
    name: 'Ratnesh',
    email:'ratnesh@gmail.com'
  }

  longStr = 'We re npm, Inc., the company behind Node package manager, the npm Registry, and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.'

  constructor(private newService: NewService){
  }

  ngOnInit(){
    // let [ arr1, arr2 ] = this.arr;
    // console.log(arr1, arr2);

    // let { name } = this.obj;
    // console.log(name);

    console.log(this.newService.name);
  }

  showName(){
    console.log(this.newService.name);
  }

  changeCart(){
    this.newService.cart += 1;
  }
}
