import { AxiosInstance } from 'axios';
import { CharacterType, ResponseType, RequestOptionsType } from '../types/types';
import { buildOptions } from '../util/options_builder';

export class Character {
  private readonly client: AxiosInstance;
  static readonly urlRoute = '/character';

  public constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Request one specific character by their ID
   *
   * @param 'id' {string}
   * @result {CharacterType}
   */
  async get(id: string): Promise<CharacterType> {
    return this.client
      .get(`${Character.urlRoute}/${id}`)
      .then((response) => response?.data.docs[0]);
  }

  /**
   * Request all characters
   *
   * @param 'options' {RequestOptionsType}
   * @result {ResponseType<CharacterType>}
   */
  async getAll(options?: RequestOptionsType): Promise<ResponseType<CharacterType>> {
    return this.client
      .get(`${Character.urlRoute}${buildOptions<CharacterType>(options)}`)
      .then((response) => response?.data);
  }
}
