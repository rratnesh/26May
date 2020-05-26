import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'https://fakeimg.pl/250x100/ff0000/';

  bgColor = 'red';

  columns = 2;

  active = false;

  items = ['bmw', 'maruti', 'ferrari'];

  constructor() {
    console.log('constriuctor')
  }

  toggleActive() {
    this.active = !this.active;
  }



  ngOnInit() {
    for (let item of this.items) {
      console.log(item);
    }
  }

}
