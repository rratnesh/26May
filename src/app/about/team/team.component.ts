import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: any[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.team = [
      { name: 'Ratnesh', id: 1 },
      { name: 'Prem', id: 2 },
      { name: 'Bhavna', id: 3 },
    ]
  }
}
