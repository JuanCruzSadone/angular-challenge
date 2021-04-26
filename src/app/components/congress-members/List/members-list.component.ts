import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { IMember, IResult } from 'src/app/services/api/congress/congress-member/member';
import { MemberService } from 'src/app/services/api/congress/congress-member/member.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatTable, {static: true}) table: MatTable<IMember>;
  membersAux: IMember[];
  dataSource: any;
  currentPage: any = 0;
  pageSize: any;
  totalSize: number;
  loading: Boolean = true;
  form: FormGroup;
  advanced: Boolean = false;
  displayedColumns: string[] = ['First Name', 'Last Name', 'Date of birth', 'Gender', 'Votes', 'Phone', 'Info'];
  
  constructor(private memberService: MemberService,
              private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.getMembers();
    this.createForm();
  }

  createForm(): void {
    this.form = this.memberService.getMemberSearchGroup();
  }

  getMembers(): void {
    this.memberService.getMembers(116, 'senate').subscribe( data => {
      this.membersAux = data.results[0].members;
      this.dataSource = new MatTableDataSource<Element>(data.results[0].members);
      this.dataSource.paginator = this.paginator;
      this.totalSize = data.results[0].members.length;
      this.resetDataSource();
      this.loading = false;
    });
  }

  handlePage(e: any): void {
    this.dataSource = e.pageIndex === 0 ? this.membersAux.slice(0,7) : this.membersAux.slice(7 * e.pageIndex, 7 * e.pageIndex + 7);
    this.currentPage = e.pageIndex;
  }

  viewMember(index) : void {
    this.router.navigateByUrl(`${this.dataSource[index].id}/view`);
  }

  onSubmit() {
    const searchValue = this.form.getRawValue().search;
    const toggle = this.form.getRawValue().toggle;
    const advance = this.form.get('advanced').value;
    if (!toggle) {
      if (searchValue) {
        this.searchByAnyValue(searchValue);
      } else {
        this.resetDataSource();
      }
    } else {
      if (searchValue) {
        this.searchBy(advance, searchValue);
      } else {
        this.resetDataSource();
      }
    }

  }

  searchByAnyValue(searchValue): void {
    this.dataSource = this.membersAux.filter(o => { return Object.keys(o).some(k => { if(typeof o[k] === 'string') return o[k].toLowerCase().includes(searchValue.toLowerCase());
      });
    }); 
  }

  searchBy(by, searchValue): void {
    const key = this.searchObj(by, true);
    if (key) {
      const result = this.membersAux.filter(o => { return Object.keys(o).some(k => { if(k === key) return o[k].toLowerCase().includes(searchValue.toLowerCase());
                        });
                      }); 
      this.dataSource = result.length > 7 ? result.slice(0,7) : result;
    }
  }

  searchObj (obj, query): any {
    for (let key in obj) {
      const value = obj[key];
      if (typeof value === 'object') {
          this.searchObj(value, query);
      }
      if (value === query) {
        return key;
      }
    }
  }

  resetDataSource(): void {
    this.dataSource = this.membersAux.slice(0,7)
  }

  change(e): void {
    this.advanced = e.checked;
  }

}
