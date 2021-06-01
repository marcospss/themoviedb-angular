import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { MoviesDetails, MovieResults, MovieItem } from '@infrastructure/models';
import { MoviesService, HelpersService } from '@infrastructure/services';
import { Backdrop, Poster } from '@infrastructure/enums';
import { of } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit, OnDestroy, DoCheck {
  private subscriptionRoute!: Subscription;
  mediaId!: string;
  mediaType!: string;
  details$!: Observable<MoviesDetails>;
  recommendations$!: Observable<MovieResults>;
  backdropSize: string = Backdrop.w780;
  posterSize: string = Poster.w154;
  hasError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    public helpersService: HelpersService
  ) {}

  ngOnInit(): void {
    this.subscriptionRoute = this.route.params
      .pipe(
        map(({ mediaId }) => {
          this.details$ = this.moviesService.details({ mediaId }).pipe(
            catchError(() => {
              this.hasError = true;
              return of({} as MoviesDetails);
            })
          );
          this.recommendations$ = this.moviesService.recommendations({
            mediaId,
          });
          this.helpersService.scrollTopPage();
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subscriptionRoute.unsubscribe();
  }

  ngDoCheck(): void {
    // this.helpersService.scrollTopPage();
  }

  trackByFn(_: any, item: MovieItem) {
    return item?.id;
  }
}
