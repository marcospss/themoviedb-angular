import { MovieResults, MoviesDetails } from '@infrastructure/models';

export const movieResultsMock: MovieResults = {
  page: 1,
  results: [
    {
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
    },
  ],
  total_pages: 500,
  total_results: 10000,
};

export const movieDetailsMock: MoviesDetails = {
  adult: false,
  backdrop_path: '/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
  belongs_to_collection: null,
  budget: 20000000,
  genres: [
    { id: 28, name: 'Action' },
    { id: 14, name: 'Fantasy' },
    { id: 12, name: 'Adventure' },
    { id: 878, name: 'Science Fiction' },
  ],
  homepage: 'https://www.mortalkombatmovie.net',
  id: 460465,
  imdb_id: 'tt0293429',
  original_language: 'en',
  original_title: 'Mortal Kombat',
  overview:
    "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
  popularity: 4340.628,
  poster_path: '/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg',
  production_companies: [
    {
      id: 76907,
      logo_path: '/wChlWsVgwSd4ZWxTIm8PTEcaESz.png',
      name: 'Atomic Monster',
      origin_country: 'US',
    },
    {
      id: 8000,
      logo_path: '/f8NwLg72BByt3eav7lX1lcJfe60.png',
      name: 'Broken Road Productions',
      origin_country: 'US',
    },
    {
      id: 12,
      logo_path: '/iaYpEp3LQmb8AfAtmTvpqd4149c.png',
      name: 'New Line Cinema',
      origin_country: 'US',
    },
    {
      id: 174,
      logo_path: '/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png',
      name: 'Warner Bros. Pictures',
      origin_country: 'US',
    },
    {
      id: 2806,
      logo_path: '/vxOhCbpsRBh10m6LZ3HyImTYpPY.png',
      name: 'South Australian Film Corporation',
      origin_country: 'AU',
    },
    {
      id: 13033,
      logo_path: null,
      name: 'NetherRealm Studios',
      origin_country: 'US',
    },
  ],
  production_countries: [
    { iso_3166_1: 'AU', name: 'Australia' },
    { iso_3166_1: 'US', name: 'United States of America' },
  ],
  release_date: '2021-04-07',
  revenue: 50115000,
  runtime: 110,
  spoken_languages: [],
  status: 'Released',
  tagline: 'Get over here.',
  title: 'Mortal Kombat',
  video: false,
  vote_average: 7.8,
  vote_count: 2140,
};
