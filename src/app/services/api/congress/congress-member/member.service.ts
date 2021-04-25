import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/common/http/http.service';
import { IMember } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpService: HttpService,
              private fb: FormBuilder) { }

  getMemberGroup(): FormGroup {
    return this.fb.group({
      title: [null, Validators.compose([Validators.required])],
      short_tittle: [null, Validators.compose([Validators.required])],
      first_name: [null, Validators.compose([Validators.required])],
      last_name: [null, Validators.compose([Validators.required])],
      date_of_birth: [null, Validators.compose([Validators.required])],
      gender: [null, Validators.compose([Validators.required])],
      party: [null, Validators.compose([Validators.required])],
      total_votes: [null, Validators.compose([Validators.required])],
      phone: [null, Validators.compose([Validators.required])],
    });
  }     
  
  getMembers(congress: any, chamber: any): Observable<IMember[]> {
    return this.httpService.get(`${congress}/${chamber}/members.json`);
  }

  getMember(id: any): Observable<IMember> {
    return this.httpService.get(`members/${id}.json`);
  }
}
