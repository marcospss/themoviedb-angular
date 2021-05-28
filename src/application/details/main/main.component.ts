import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { MoviesDetails, MovieResults, MovieItem } from '@infrastructure/models';
import {
  MoviesService,
  HelpersService,
  MetaTagsService,
} from '@infrastructure/services';
import { Backdrop, Poster } from '@infrastructure/enums';
import { of } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy, DoCheck {
  private subscriptionRoute!: Subscription;
  mediaId!: string;
  mediaType!: string;
  details!: MoviesDetails;
  recommendations$!: Observable<MovieResults>;
  backdropSize: string = Backdrop.w780;
  posterSize: string = Poster.w154;
  hasError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    public helpersService: HelpersService,
    private metaTagsService: MetaTagsService
  ) {}

  ngOnInit(): void {
    this.subscriptionRoute = this.route.params
      .pipe(
        map(({ mediaId }) => {
          const { title, overview, backdrop_path } =
            this.route.snapshot.data.media;
          this.metaTagsService.generate({
            urlPage: window.location.href,
            title,
            description: overview,
            imagePath: backdrop_path,
            imageSize: 'w780',
          });
          this.details = this.route.snapshot.data.media;
          // this.details$ = this.moviesService.details({ mediaId }).pipe(
          //   catchError(() => {
          //     this.hasError = true;
          //     return of({} as MoviesDetails);
          //   })
          // );
          this.recommendations$ = this.moviesService.recommendations({
            mediaId,
          });
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subscriptionRoute.unsubscribe();
  }

  ngDoCheck(): void {
    this.helpersService.scrollTopPage();
  }

  trackByFn(_: any, item: MovieItem) {
    return item?.id;
  }
}
