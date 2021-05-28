import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

import { MoviesService } from './movies.service';
import { MoviesDetails } from '@infrastructure/models';
import { first, tap } from 'rxjs/operators';

@Injectable()
export class MediaResolver implements Resolve<MoviesDetails> {
  constructor(
    private moviesService: MoviesService,
    @Inject(PLATFORM_ID) private platformId: string,
    private transferState: TransferState
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<MoviesDetails> {
    const { mediaId, mediaType } = route.params;
    const MEDIA_KEY = makeStateKey<MoviesDetails>(`${mediaType}-${mediaId}`);

    if (this.transferState.hasKey(MEDIA_KEY)) {
      const media = this.transferState.get<MoviesDetails>(
        MEDIA_KEY,
        {} as MoviesDetails
      );
      this.transferState.remove(MEDIA_KEY);
      return of(media);
    } else {
      return this.moviesService.details({ mediaId }).pipe(
        first(),
        tap((media) => {
          if (isPlatformServer(this.platformId)) {
            this.transferState.set(MEDIA_KEY, media);
          }
        })
      );
    }
  }
}
