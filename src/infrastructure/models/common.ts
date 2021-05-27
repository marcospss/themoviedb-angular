export type Genre = {
  id: number;
  name: string;
};

export type Genres = {
  genres: Genre[];
};

export type Cast = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: 1.964;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type Crew = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};

export type CreatedBy = {
  id: number;
  credit_id: string;
  name: string;
  profile_path: string;
};

export type ProductionCompanies = {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
};

export type Credits = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

export type MetaTags = {
  urlPage: string;
  title: string;
  description: string;
  imagePath: string;
  imageSize: string;
  isHomePage?: boolean | false;
};
