import { Component, OnInit } from '@angular/core';
import { NewService } from 'src/app/services/new.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private newService: NewService) { }

  ngOnInit(): void {
    console.log(this.newService.name);
  }

  showName() {
    console.log(this.newService.name);
  }

}
