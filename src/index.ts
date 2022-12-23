import axios, { AxiosInstance } from 'axios';

import { Book } from './services/book';
import { Movie } from './services/movie';
import { Character } from './services/character';
import { Quote } from './services/quote';
import { Chapter } from './services/chapter';
import { API_URL } from './constants/constants';

/**
 * LOTR API TypeScript Client
 *
 * TypeScript SDK for The One API
 *
 */
export class TheOneSDK {
  private client: AxiosInstance;

  public readonly Book: Book;
  public readonly Movie: Movie;
  public readonly Chapter: Chapter;
  public readonly Character: Character;
  public readonly Quote: Quote;

  constructor(apiKey?: string) {
    this.client = axios.create({
      baseURL: API_URL,
      headers: apiKey ? { Authorization: `Bearer ${apiKey}` } : {},
    });

    this.Book = new Book(this.client);
    this.Chapter = new Chapter(this.client);
    this.Character = new Character(this.client);
    this.Movie = new Movie(this.client);
    this.Quote = new Quote(this.client);
  }
}
