import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { MoviesService, HelpersService } from '@infrastructure/services';
import { MainComponent } from './main.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('# DETAILS', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let httpTestingController: HttpTestingController;
  let moviesService: MoviesService;
  let helpersService: HelpersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [HttpClientTestingModule],
      providers: [
        MoviesService,
        HelpersService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              mediaId: 1974,
              mediaType: 'movie',
            }),
          },
        },
      ],
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
