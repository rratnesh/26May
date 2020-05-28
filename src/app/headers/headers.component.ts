import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  @Input('firstName') name;
  @Output() emitChangeActive = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  changeActive(arr){
    this.emitChangeActive.emit(arr);
  }
}
