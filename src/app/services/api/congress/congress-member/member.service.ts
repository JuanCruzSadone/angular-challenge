import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/common/http/http.service';
import { IResult } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpService: HttpService,
              private fb: FormBuilder) { }  
  
  getMemberSearchGroup(): FormGroup {
    return this.fb.group({
      search: [null, Validators.compose([Validators.required])],
      toggle: [null, Validators.compose([Validators.required])],
      advanced: this.getAdvanceGroup()
    });
  }   
  
  getAdvanceGroup(): FormGroup {
    return this.fb.group({
        first_name: [null],
        last_name: [null],
        phone: [null],
        gender: [null]
    });
  } 
  
  getMembers(congress: any, chamber: any): Observable<any> {
    console.log('ENTRO')
    return this.httpService.get(`${congress}/${chamber}/members.json`);
  }

  getMember(id: any): Observable<any> {
    return this.httpService.get(`members/${id}.json`);
  }
}
