import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MovieItem, MovieResults, StatusErrors } from '@infrastructure/models';
import { MoviesService, MetaTagsService } from '@infrastructure/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  error: StatusErrors = {};
  popular$!: Observable<MovieResults>;
  constructor(
    private moviesService: MoviesService,
    private metaTagsService: MetaTagsService
  ) {}

  ngOnInit(): void {
    this.metaTagsService.generate({
      urlPage: window.location.href,
      description:
        'The Movie Database (TMDb) is a popular, user editable database for movies and TV shows.',
      imagePath:
        'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg',
      imageSize: 'w780',
      title: 'The Movie Database (TMDb)',
      isHomePage: true,
    });
    this.moviePopularResults();
  }

  moviePopularResults() {
    this.popular$ = this.moviesService.popular({ page: 1 });
    // this.moviesService.popular({ page: 1 }).subscribe(
    //   (data: MovieResults) => this.popular = data,
    //   error => this.error = error
    // )
  }

  trackByFn(_: any, item: MovieItem) {
    return item?.id;
  }
}
