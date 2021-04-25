import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as _ from "lodash";

const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
  'X-API-Key': 'SKargLkdTTkIO8FCRNDjiNNG8rcf3VhzHDxYFChz'
});

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  private completeURL(url) {
    return this.apiUrl + url;
  }

  public get(url: string, params?: any): Observable<any> {
    return this.http
      .get(this.completeURL(url), {headers: httpHeaders, params: params});
  }

  public post(url: string, object: any): Observable<any> {
    const body = _.pickBy(object, _.identity);
    return this.http.post(this.completeURL(url), body, {headers: httpHeaders});
  }

  public put(url: string, object: any): Observable<any> {
    const body = _.pickBy(object, _.identity);
    return this.http.put(this.completeURL(url), body, {headers: httpHeaders});
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(this.completeURL(url), {headers: httpHeaders});
  }
}
