import { AxiosInstance } from 'axios';
import { MovieType, ResponseType, RequestOptionsType } from '../types/types';
import { buildOptions } from '../util/options_builder';

export class Movie {
  private readonly client: AxiosInstance;
  static readonly urlRoute = '/movie';

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
    return this.client.get(`${Movie.urlRoute}/${id}`).then((response) => response?.data.docs[0]);
  }

  /**
   * Request all movies
   *
   * @param 'options' {RequestOptionsType}
   * @result {ResponseType<MovieType[]>}
   */
  async getAll(options?: RequestOptionsType): Promise<ResponseType<MovieType[]>> {
    return this.client
      .get(`${Movie.urlRoute}${buildOptions<MovieType>(options)}`)
      .then((response) => response?.data);
  }
}
