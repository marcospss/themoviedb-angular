import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { MovieResults, MoviesDetails, ParamsUrl } from '../models';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  discover({ sortBy = 'popularity.desc', page = 1 }): Observable<MovieResults> {
    return this.http
      .get<MovieResults>(
        `${environment.baseURL}/discover/movie?${environment.paramsDefault}&page=${page}&sort_by=${sortBy}&include_adult=false&include_video=false`
      )
      .pipe(catchError(this.handleError));
  }

  search({ query, page = 1 }: ParamsUrl): Observable<MovieResults> {
    return this.http
      .get<MovieResults>(
        `${environment.baseURL}/search/movie?${environment.paramsDefault}&page=${page}&query=${query}&include_adult=false`
      )
      .pipe(catchError(this.handleError));
  }

  details({ mediaId }: ParamsUrl): Observable<MoviesDetails> {
    return this.http
      .get<MoviesDetails>(
        `${environment.baseURL}/movie/${mediaId}?${environment.paramsDefault}`
      )
      .pipe(catchError(this.handleError));
  }

  recommendations({ mediaId, page = 1 }: ParamsUrl): Observable<MovieResults> {
    return this.http
      .get<MovieResults>(
        `${environment.baseURL}/movie/${mediaId}/recommendations?${environment.paramsDefault}&page=${page}`
      )
      .pipe(catchError(this.handleError));
  }

  similar({ mediaId, page = 1 }: ParamsUrl): Observable<MovieResults> {
    return this.http
      .get<MovieResults>(
        `${environment.baseURL}/movie/${mediaId}/similar?${environment.paramsDefault}&page=${page}`
      )
      .pipe(catchError(this.handleError));
  }

  nowPlaying({ page = 1 }: ParamsUrl): Observable<MovieResults> {
    return this.http
      .get<MovieResults>(
        `${environment.baseURL}/movie/now_playing?${environment.paramsDefault}&page=${page}`
      )
      .pipe(catchError(this.handleError));
  }

  popular({ page }: ParamsUrl): Observable<MovieResults> {
    return this.http
      .get<MovieResults>(
        `${environment.baseURL}/movie/popular?${environment.paramsDefault}&page=${page}`
      )
      .pipe(catchError(this.handleError));
  }

  topRated({ page = 1 }: ParamsUrl): Observable<MovieResults> {
    return this.http
      .get<MovieResults>(
        `${environment.baseURL}/movie/top_rated?${environment.paramsDefault}&page=${page}`
      )
      .pipe(catchError(this.handleError));
  }

  upcoming({ page = 1 }: ParamsUrl): Observable<MovieResults> {
    return this.http
      .get<MovieResults>(
        `${environment.baseURL}/movie/upcoming?${environment.paramsDefault}&page=${page}`
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
