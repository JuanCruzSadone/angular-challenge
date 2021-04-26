import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MemberService } from './member.service';

describe('MemberService', () => {
  let service: MemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule 
      ],
    });
    service = TestBed.inject(MemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
