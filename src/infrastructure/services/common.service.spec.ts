import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CommonService } from './common.service';
import { Genres, Credits } from '@infrastructure/models';

describe('CommonService', () => {
  let httpTestingController: HttpTestingController;
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommonService],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CommonService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('genre()', () => {
    it('returned Observable should match the right data', (done) => {
      const genreMock: Genres = {
        genres: [
          {
            id: 28,
            name: 'Action',
          },
        ],
      };
      service.genre({ mediaType: 'movie' }).subscribe((data: Genres[]) => {
        done();
      });

      const req = httpTestingController.expectOne((req) =>
        req.url.includes('genre')
      );

      expect(req.request.method).toEqual('GET');

      req.flush(genreMock);
    });
  });

  describe('credits()', () => {
    it('returned Observable should match the right data', (done) => {
      const creditsMock: Credits = {
        id: 527774,
        cast: [
          {
            adult: false,
            gender: 1,
            id: 1663195,
            known_for_department: 'Acting',
            name: 'Kelly Marie Tran',
            original_name: 'Kelly Marie Tran',
            popularity: 1.964,
            profile_path: '/v2daUrk7hZryH6vtCWK9ESf6gAG.jpg',
            cast_id: 9,
            character: 'Raya (voice)',
            credit_id: '5f47db6f813cb600358c77aa',
            order: 0,
          },
        ],
        crew: [
          {
            adult: false,
            gender: 2,
            id: 1213,
            known_for_department: 'Sound',
            name: 'James Newton Howard',
            original_name: 'James Newton Howard',
            popularity: 1.126,
            profile_path: '/qB4JgzCXCjr7NwW7UNrgBrWZDlo.jpg',
            credit_id: '6012b51d0816c7004182f742',
            department: 'Sound',
            job: 'Original Music Composer',
          },
        ],
      };
      service
        .credits({ mediaType: 'movie', mediaId: '527774' })
        .subscribe((data: Credits) => {
          done();
        });

      const req = httpTestingController.expectOne((req) =>
        req.url.includes('movie/527774/credits')
      );

      expect(req.request.method).toEqual('GET');

      req.flush(creditsMock);
    });
  });
});
