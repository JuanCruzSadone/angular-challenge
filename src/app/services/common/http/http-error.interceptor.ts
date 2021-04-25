import { Router } from '@angular/router';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
	constructor() { }
	// intercept request and add token
  	intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
	   
    console.log('----request----');
	 	console.log(request);
 
    return next.handle(request)
	    .pipe(
	        tap(event => {
	          if (event instanceof HttpResponse) {             
	            console.log('----OK----');
	            // http response status code
	            console.log(event.status);
	          }
	        }, error => {
	   			// http response status code
	          	console.log('----response----');
	          	console.error('status code:');
	          	console.error(error.status);
	          	console.error(error.message);
	        })
	      )
    };
}
