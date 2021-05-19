import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpersService } from '@infrastructure/services';
import { MovieItem } from '@infrastructure/models';
import { CardPosterComponent } from './card-poster.component';

const movieDetailsMock: MovieItem = {
  adult: false,
  backdrop_path: '/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
  genre_ids: [28, 14, 12, 878],
  id: 460465,
  original_language: 'en',
  original_title: 'Mortal Kombat',
  overview:
    "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
  popularity: 4340.628,
  poster_path: '/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg',
  release_date: '2021-04-07',
  title: 'Mortal Kombat',
  video: false,
  vote_average: 7.8,
  vote_count: 2120,
};

describe('# Card Poster Component', () => {
  let component: CardPosterComponent;
  let fixture: ComponentFixture<CardPosterComponent>;
  let helpersService: HelpersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPosterComponent],
      providers: [HelpersService],
    }).compileComponents();
    helpersService = TestBed.inject(HelpersService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPosterComponent);
    component = fixture.componentInstance;
    component.media = movieDetailsMock;
    fixture.detectChanges();
  });

  it('should create Card Poster Component', () => {
    expect(component).toBeTruthy();
  });
});
