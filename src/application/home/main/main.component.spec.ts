import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { MoviesService, HelpersService } from '@infrastructure/services';
import { MovieResults } from '@infrastructure/models';
import { MainComponent } from './main.component';
import { movieResultsMock } from '@mocks';

describe('# HOME ', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let httpTestingController: HttpTestingController;
  let moviesService: MoviesService;
  let helpersService: HelpersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [HttpClientTestingModule],
      providers: [MoviesService, HelpersService],
    }).compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
    moviesService = TestBed.inject(MoviesService);
    helpersService = TestBed.inject(HelpersService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Home Main', () => {
    expect(component).toBeTruthy();
  });

  it('returned Observable should match the right data', (done) => {
    moviesService.popular({ page: 1 }).subscribe((data: MovieResults) => {
      expect(data.page).toBe(1);
      expect(data.results?.length).toBe(1);
      expect(data.total_pages).toBe(500);
      expect(data.total_results).toBe(10000);
    });
    done();
  });
});
