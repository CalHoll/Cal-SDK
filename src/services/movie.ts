import { AxiosInstance } from 'axios';
import { MovieType, ResponseType, RequestOptionsType, QuoteType } from '../types/types';
import { buildOptions } from '../util/options_builder';
import { Quote } from './quote';
import { MoviesRoute, QuotesRoute } from '../constants/constants';

export class Movie {
  private readonly client: AxiosInstance;

  public constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Request movie by id
   *
   * @param 'id' {string}
   * @result {ResponseType<QuoteType>}
   */
  async get(id: string): Promise<MovieType> {
    return this.client.get(`${MoviesRoute}/${id}`).then((response) => response?.data.docs[0]);
  }

  /**
   * Request all movies
   *
   * @param 'options' {RequestOptionsType}
   * @result {ResponseType<MovieType[]>}
   */
  async getAll(options?: RequestOptionsType): Promise<ResponseType<MovieType[]>> {
    return this.client
      .get(`${MoviesRoute}${buildOptions(options)}`)
      .then((response) => response?.data);
  }

  /**
   * Request quotes by movie id
   *
   * @param 'movieId' {string}
   * @param 'options' {RequestOptionsType}
   * @result {ResponseType<QuoteType>}
   */
  async getMovieQuotes(
    movieId: string,
    options?: RequestOptionsType
  ): Promise<ResponseType<QuoteType>> {
    return this.client
      .get(`${MoviesRoute}/${movieId}${QuotesRoute}${buildOptions(options)}`)
      .then((response) => response?.data);
  }
}
