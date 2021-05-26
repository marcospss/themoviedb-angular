import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@infrastructure/environments/environment';
import { Genres, Credits, ParamsUrl } from '@infrastructure/models';

@Injectable()
export class CommonService {
  constructor(private http: HttpClient) {}

  genre({ mediaType }: ParamsUrl): Observable<Genres[]> {
    return this.http
      .get<Genres[]>(
        `${environment.baseURL}/genre/${mediaType}/list?${environment.paramsDefault}`
      )
      .pipe(catchError(this.handleError));
  }

  credits({ mediaType, mediaId }: ParamsUrl): Observable<Credits> {
    return this.http
      .get<Credits>(
        `${environment.baseURL}/${mediaType}/${mediaId}/credits?${environment.paramsDefault}`
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return error.error instanceof ErrorEvent
      ? // A client-side or network error occurred. Handle it accordingly.
        throwError(`An error occurred: ${error.error.message}`)
      : // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        throwError(`Backend returned code: ${error.status}`);
  }
}
