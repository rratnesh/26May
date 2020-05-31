import { Component, OnInit } from '@angular/core';
import { NewService } from '../services/new.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  cart = 0;

  constructor(private newService: NewService) { }

  ngOnInit(): void {
    console.log(this.newService.name);
    this.cart = this.newService.cart;
  }

  changeName(value) {
    this.newService.name = value;
  }


  getUpdatedCart() {
    this.cart = this.newService.cart;
  }


}
