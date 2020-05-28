import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-of-header',
  templateUrl: './child-of-header.component.html',
  styleUrls: ['./child-of-header.component.css']
})
export class ChildOfHeaderComponent implements OnInit {

  _name: string;

  arr = [];

  @Input()
  set name(value) {
    this._name = value;
  }

  @Output() emitChangeActive = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitChange() {
    this.emitChangeActive.emit(this.arr);
  }

  get upperCaseName() {
    return this._name.toUpperCase();
  }

  get getCenterValue() {

    let length = this.arr.length;

    if (length != 0) {
      if (length % 2 == 0) {
        return this.arr[(length / 2) - 1];
      } else {
        return this.arr[Math.trunc(length / 2)];
      }
    }
    return '';
  }

}
