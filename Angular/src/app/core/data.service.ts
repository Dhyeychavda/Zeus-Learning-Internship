import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs-compat/Observable';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer } from '../../app/shared/interfaces';

@Injectable()
export class DataService {
    

    baseUrl: string = 'assets/';
    
    constructor(private http: HttpClient) { }

    getCustomers() : Observable<any> {
        return this.http.get<ICustomer[]>(this.baseUrl + 'courses.json')
            .pipe(
                catchError(this.handleError)
            );
    }
    

    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return throwError(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return throwError(error || 'Node.js server error');
    }

}