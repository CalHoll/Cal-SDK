import { AxiosInstance, AxiosResponse } from 'axios';
import { BookType, RequestOptionsType, ResponseType } from '../types/types';
import { buildOptions } from '../util/options_builder';
import { BooksRoute } from '../constants/constants';

export class Book {
  private readonly client: AxiosInstance;

  public constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Request one specific book by it's ID
   *
   * @param 'id' {string}
   * @result {BookType}
   */
  async get(id: string): Promise<BookType> {
    return this.client
      .get(`${BooksRoute}/${id}`)
      .then((response: AxiosResponse<ResponseType<BookType>>) => response.data.docs[0]);
  }

  /**
   * List of all "The Lord of the Rings" books
   *
   * @param 'options' {RequestOptionsType}
   * @result {ResponseType<BookType>}
   */
  async getAll(options?: RequestOptionsType): Promise<ResponseType<BookType>> {
    return this.client
      .get(`${BooksRoute}${buildOptions(options)}`)
      .then((response: AxiosResponse<ResponseType<BookType>>) => response.data);
  }
}
