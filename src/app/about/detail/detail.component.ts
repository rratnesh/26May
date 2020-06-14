import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/shared/services/team.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  member = null;

  constructor(private teamService: TeamService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log('Created');
    // this.activatedRoute.params.subscribe(({id})=>{
    //   if(id){
    //     this.getMemberInfo(id);
    //   }
    // })
    let { id } = this.activatedRoute.snapshot.params;
    let queryParams = this.activatedRoute.snapshot.queryParams;
    console.log(queryParams);
    if (id) {
      this.getMemberInfo(id);
    }
  }

  getMemberInfo(id) {
    this.teamService.getMemberInfoById(id).subscribe((member) => {
      this.member = member;
    })
  }

  goToId(id) {
    this.router.navigate([`../${id}`], { relativeTo: this.activatedRoute });
  }
}
