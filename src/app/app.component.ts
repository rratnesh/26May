import { Component, ViewChild, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {


  @ViewChild('myInput') input: ElementRef;

  name = 'ratnesh singh';

  mynumber = 7.9090909090;

  date = new Date();

  constructor() {
  }

  // component object => constructor => ngOnInit => html render(view init) => ngAfterViewInit 

  ngAfterViewInit() {
    console.log('form after view init', this.input.nativeElement.value);
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
    // console.log('form oninit', this.input.value);
  }

}
