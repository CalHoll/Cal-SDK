import { AxiosInstance } from 'axios';
import { Book } from './book';
import { ChapterType, ResponseType, RequestOptionsType } from '../types/types';
import { buildOptions } from '../util/options_builder';
import { BooksRoute, ChaptersRoute } from '../constants/constants';

export class Chapter {
  private readonly client: AxiosInstance;

  public constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Request one chapter by id
   *
   * @param 'id' {string} book id
   * @result {ChapterType}
   */
  async get(id: string): Promise<ChapterType> {
    return this.client.get(`${ChaptersRoute}/${id}`).then((response) => response?.data.docs[0]);
  }

  /**
   * Request all chapters
   *
   * @param 'options' {RequestOptionsType}
   * @result {ResponseType<ChapterType[]}
   */
  async getAll(options?: RequestOptionsType): Promise<ResponseType<ChapterType[]>> {
    return this.client
      .get(`${ChaptersRoute}${buildOptions(options)}`)
      .then((response) => response?.data);
  }

  /**
   * Request all chapters of one book by book id
   *
   * @param 'bookId' {string}
   * @param 'options' {RequestOptionsType}
   * @result {ResponseType<ChapterType[]}
   */
  async getChaptersByBook(bookId: string, options?: RequestOptionsType) {
    return this.client
      .get(`${BooksRoute}/${bookId}/${BooksRoute}${buildOptions(options)}`)
      .then((response) => response?.data);
  }
}
