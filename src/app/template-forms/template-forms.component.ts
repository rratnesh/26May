import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  @ViewChild('#f') email;

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.email);
  }

}
