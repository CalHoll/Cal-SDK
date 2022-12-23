import { Book } from '../../src/services/book';
import axios, { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { API_URL, BooksRoute } from '../../src/constants/constants';

describe('Book Endpoint', () => {
  describe('Get All', () => {
    test('Should return all books', async () => {
      const expected = {
        docs: [
          {
            _id: '5cd95395de30eff6ebccfea8',
            name: 'The Fellowship of the Ring',
          },
          {
            _id: '5cd95395de30eff6ebccfea9',
            name: 'The Two Towers',
          },
          {
            _id: '5cd95395de30eff6ebccfeaa',
            name: 'The Return of the King',
          },
        ],
      };

      var mock = new MockAdapter(axios);
      mock.onGet(API_URL + BooksRoute).reply(200, expected);

      const client = axios.create({
        baseURL: API_URL,
      });

      const bookClient = new Book(client);
      await bookClient.getAll().then((response) => {
        expect(response).toEqual(expected);
      });
    });
  });
});
