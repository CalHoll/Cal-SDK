export interface BookType {
  _id: string;
  name: string;
}

export interface ChapterType {
  _id: string;
  chapterName: string;
}

export interface CharacterType {
  _id: string;
  name: string;
  race: string;
  realm: string;
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  spouse: string;
  wikiUrl: string;
}

export interface MovieType {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  boxOfficeRevenueInMillions: number;
  budgetInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

export interface QuoteType {
  _id: string;
  id: string;
  character: string;
  dialog: string;
  movie: string;
}

export interface ResponseType<T> {
  docs: T[];
  total: number;
  limit: number;
  page: number;
  offset: number;
}

export interface RequestOptionsType {
  limit?: number;
  page?: number;
  offset?: number;
  // TODO: Filter options
}
