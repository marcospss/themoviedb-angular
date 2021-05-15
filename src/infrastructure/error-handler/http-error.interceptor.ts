import {
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
  HttpInterceptor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

// import { ErrorDialogService } from '../../shared/errors/error-dialog.service';
import { LoadingDialogService } from '@infrastructure/services';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private loadingDialogService: LoadingDialogService) {} // private errorDialogService: ErrorDialogService,

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingDialogService.showLoading();
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(
          'Error from error interceptor',
          error?.error?.status_message
        );
        // this.errorDialogService.openDialog(
        //   error.message ?? JSON.stringify(error),
        //   error.status
        // );
        return throwError(error);
      }),
      finalize(() => {
        this.loadingDialogService.hideLoading();
      })
    ) as Observable<HttpEvent<any>>;
  }
}
