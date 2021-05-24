import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { MoviesService } from './movies.service';
import { MovieResults, MoviesDetails } from '@infrastructure/models';
import { movieDetailsMock, movieResultsMock } from '@mocks';

describe('# MoviesService', () => {
  let httpTestingController: HttpTestingController;
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('discover()', () => {
    it('returned Observable should match the right data', (done) => {
      service
        .discover({ sortBy: 'popularity.desc', page: 1 })
        .subscribe((data: MovieResults) => {
          expect(data.page).toBe(1);
          expect(data.results?.length).toBe(1);
          expect(data.total_pages).toBe(500);
          expect(data.total_results).toBe(10000);
          done();
        });

      const req = httpTestingController.expectOne((req) =>
        req.url.includes('discover/movie')
      );

      expect(req.request.method).toEqual('GET');

      req.flush(movieResultsMock);
    });
  });

  describe('search()', () => {
    it('returned Observable should match the right data', (done) => {
      service
        .search({ query: 'Mortal Kombat', page: 1 })
        .subscribe((data: MovieResults) => {
          expect(data.page).toBe(1);
          expect(data.results?.length).toBe(1);
          expect(data.total_pages).toBe(500);
          expect(data.total_results).toBe(10000);
          done();
        });

      const req = httpTestingController.expectOne((req) =>
        req.url.includes('search/movie')
      );

      expect(req.request.method).toEqual('GET');

      req.flush(movieResultsMock);
    });
  });

  describe('details()', () => {
    it('returned Observable should match the right data', (done) => {
      service
        .details({ mediaId: '460465' })
        .subscribe((data: MoviesDetails) => {
          expect(data?.id).toBe(460465);
          expect(data?.genres?.length).toBe(4);
          expect(data?.title).toBe('Mortal Kombat');
          done();
        });

      const req = httpTestingController.expectOne((req) =>
        req.url.includes('movie/460465')
      );

      expect(req.request.method).toEqual('GET');

      req.flush(movieDetailsMock);
    });
  });

  describe('recommendations()', () => {
    it('returned Observable should match the right data', (done) => {
      service
        .recommendations({ mediaId: '460465' })
        .subscribe((data: MovieResults) => {
          expect(data.page).toBe(1);
          expect(data.results?.length).toBe(1);
          expect(data.total_pages).toBe(500);
          expect(data.total_results).toBe(10000);
          done();
        });

      const req = httpTestingController.expectOne((req) =>
        req.url.includes('movie/460465/recommendations')
      );

      expect(req.request.method).toEqual('GET');

      req.flush(movieResultsMock);
    });
  });

  describe('similar()', () => {
    it('returned Observable should match the right data', (done) => {
      service.similar({ mediaId: '460465' }).subscribe((data: MovieResults) => {
        expect(data.page).toBe(1);
        expect(data.results?.length).toBe(1);
        expect(data.total_pages).toBe(500);
        expect(data.total_results).toBe(10000);
        done();
      });

      const req = httpTestingController.expectOne((req) =>
        req.url.includes('movie/460465/similar')
      );

      expect(req.request.method).toEqual('GET');

      req.flush(movieResultsMock);
    });
  });

  describe('nowPlaying()', () => {
    it('returned Observable should match the right data', (done) => {
      service.nowPlaying({ page: 1 }).subscribe((data: MovieResults) => {
        expect(data.page).toBe(1);
        expect(data.results?.length).toBe(1);
        expect(data.total_pages).toBe(500);
        expect(data.total_results).toBe(10000);
        done();
      });

      const req = httpTestingController.expectOne((req) =>
        req.url.includes('movie/now_playing')
      );

      expect(req.request.method).toEqual('GET');

      req.flush(movieResultsMock);
    });
  });

  describe('popular()', () => {
    it('returned Observable should match the right data', (done) => {
      service.popular({ page: 1 }).subscribe((data: MovieResults) => {
        expect(data.page).toBe(1);
        expect(data.results?.length).toBe(1);
        expect(data.total_pages).toBe(500);
        expect(data.total_results).toBe(10000);
        done();
      });

      const req = httpTestingController.expectOne((req) =>
        req.url.includes('movie/popular')
      );

      expect(req.request.method).toEqual('GET');

      req.flush(movieResultsMock);
    });
  });

  describe('topRated()', () => {
    it('returned Observable should match the right data', (done) => {
      service.topRated({ page: 1 }).subscribe((data: MovieResults) => {
        expect(data.page).toBe(1);
        expect(data.results?.length).toBe(1);
        expect(data.total_pages).toBe(500);
        expect(data.total_results).toBe(10000);
        done();
      });

      const req = httpTestingController.expectOne((req) =>
        req.url.includes('movie/top_rated')
      );

      expect(req.request.method).toEqual('GET');

      req.flush(movieResultsMock);
    });
  });

  describe('upcoming()', () => {
    it('returned Observable should match the right data', (done) => {
      service.upcoming({ page: 1 }).subscribe((data: MovieResults) => {
        expect(data.page).toBe(1);
        expect(data.results?.length).toBe(1);
        expect(data.total_pages).toBe(500);
        expect(data.total_results).toBe(10000);
        done();
      });

      const req = httpTestingController.expectOne((req) =>
        req.url.includes('movie/upcoming')
      );

      expect(req.request.method).toEqual('GET');

      req.flush(movieResultsMock);
    });
  });
});
