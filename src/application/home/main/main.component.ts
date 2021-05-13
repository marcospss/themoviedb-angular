import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MovieItem, MovieResults, StatusErrors } from '@infrastructure/models';
import { MoviesService } from '@infrastructure/services/movies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  error: StatusErrors = {};
  popular$!: Observable<MovieResults>;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
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
