export interface Movie {
  id: any;
  name: string;
  genres: Array<string>;
  image: string;
  releaseDate: string;
  runtime: string;
  rating: string;
  overview: string;
}

export interface MovieCard {
  name: string;
  genres: Array<string>;
  image: string;
  releaseDate: string;
}
