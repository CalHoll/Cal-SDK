import { AxiosInstance } from 'axios';
import { QuoteType, RequestOptionsType, ResponseType } from '../types/types';
import { buildOptions } from '../util/options_builder';
import { QuotesRoute } from '../constants/constants';

export class Quote {
  private readonly client: AxiosInstance;

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
    return this.client.get(`${QuotesRoute}/${id}`).then((response) => response?.data.docs[0]);
  }

  /**
   * Request all quotes
   *
   * @param 'options' {RequestOptionsType}
   * @result {ResponseType<QuoteType>}
   */
  async getAll(options?: RequestOptionsType): Promise<ResponseType<QuoteType>> {
    return this.client
      .get(`${QuotesRoute}${buildOptions(options)}`)
      .then((response) => response?.data);
  }
}
