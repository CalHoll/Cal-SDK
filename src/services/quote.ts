import { AxiosInstance } from 'axios';
import { QuoteType, RequestOptionsType, ResponseType } from '../types/types';
import { buildOptions } from '../util/options_builder';

export class Quote {
  private readonly client: AxiosInstance;
  static readonly urlRoute = '/quote';

  public constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Request one quote by it's id
   *
   * @param 'id' {string}
   * @result {QuoteType}
   */
  async get(id: string): Promise<QuoteType> {
    return this.client.get(`${Quote.urlRoute}/${id}`).then((response) => response?.data.docs[0]);
  }

  /**
   * Request all quotes
   *
   * @param 'options' {RequestOptionsType}
   * @result {ResponseType<QuoteType>}
   */
  async getAll(options?: RequestOptionsType): Promise<ResponseType<QuoteType>> {
    return this.client
      .get(`${Quote.urlRoute}${buildOptions(options)}`)
      .then((response) => response?.data);
  }
}
