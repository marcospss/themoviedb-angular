import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { MoviesDetails } from '@infrastructure/models';
import { MoviesService, HelpersService } from '@infrastructure/services';
import { Backdrop, Poster } from '@infrastructure/enums';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit, OnDestroy {
  private subscriptionRoute!: Subscription;
  mediaId!: string;
  mediaType!: string;
  details$!: Observable<MoviesDetails>;
  backdropSize: string = Backdrop.w780;
  posterSize: string = Poster.w154;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    public helpersService: HelpersService
  ) {}

  ngOnInit(): void {
    this.subscriptionRoute = this.route.params
      .pipe(
        map(({ mediaId, mediaType }) => {
          this.details$ = this.moviesService.details({ mediaId });
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subscriptionRoute.unsubscribe();
  }
}
