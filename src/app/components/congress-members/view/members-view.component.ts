import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMember } from 'src/app/services/api/congress/congress-member/member';
import { MemberService } from 'src/app/services/api/congress/congress-member/member.service';

@Component({
  selector: 'app-members-view',
  templateUrl: './members-view.component.html',
  styleUrls: ['./members-view.component.scss']
})
export class MembersViewComponent implements OnInit {
member: IMember;

  constructor(private memberService: MemberService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getId();
  }

  getId(): void {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getMember(params.id);
      }
    });
  }

  getMember(id): void {
    this.memberService.getMember(id).subscribe( data => {
      console.log(data.results[0])
      this.member = data.results[0];
    });
  }


}
