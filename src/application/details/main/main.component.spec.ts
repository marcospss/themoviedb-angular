import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { MoviesService, HelpersService } from '@infrastructure/services';
import { MoviesDetails } from '@infrastructure/models';
import { MainComponent } from './main.component';
import { movieDetailsMock } from '@mocks';

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

  it('should create Details Main', () => {
    expect(component).toBeTruthy();
  });

  it('should display the details media', (done) => {
    moviesService
      .details({ mediaId: '460465' })
      .subscribe((data: MoviesDetails) => {
        expect(data?.id).toBe(460465);
        expect(data?.genres?.length).toBe(4);
        expect(data?.title).toBe('Mortal Kombat');
      });
    done();
  });
});
