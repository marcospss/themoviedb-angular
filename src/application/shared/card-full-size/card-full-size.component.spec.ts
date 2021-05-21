import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MovieItem } from '@infrastructure/models';
import { HelpersService } from '@infrastructure/services';
import { CardFullSizeComponent } from './card-full-size.component';

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

describe('# Card Full Size Component', () => {
  let component: CardFullSizeComponent;
  let fixture: ComponentFixture<CardFullSizeComponent>;
  let helpersService: HelpersService;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CardFullSizeComponent],
      providers: [HelpersService],
    }).compileComponents();
    helpersService = TestBed.inject(HelpersService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFullSizeComponent);
    component = fixture.componentInstance;
    component.media = movieDetailsMock;
    component.showOverview = true;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create Card Full Size Component', () => {
    expect(component).toBeTruthy();
  });
  it('should display the info media', () => {
    const title = el.query(By.css('h1'));
    const link = el.query(By.css('a'));
    const image = el.query(By.css('img'));
    const overview = el.query(By.css('p'));

    expect(title.nativeElement.textContent.trim()).toBe(movieDetailsMock.title);
    expect(link.nativeElement.href).toContain(
      `/details/movie/${movieDetailsMock.id}`
    );
    expect(image.nativeElement.src).toBe(
      helpersService.mediaImage(movieDetailsMock.backdrop_path, 'w300')
    );
    expect(overview.nativeElement.textContent.trim()).toBe(
      helpersService.overview(movieDetailsMock.overview)
    );
  });
});
