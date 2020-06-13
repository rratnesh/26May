import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/shared/services/team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  member = null;

  constructor(private teamService: TeamService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id })=>{
      if(id){
        this.getMemberInfo(id);
      }
    })
  }

  getMemberInfo(id){
    this.teamService.getMemberInfoById(id).subscribe((member)=>{
      this.member = member;
    })
  }

}
