import { TheOneSDK } from 'cal-sdk';
import { API_KEY } from './config';
import { RequestOptionsType } from 'cal-sdk/dist/types/types';

async function showExamples() {
  const theOneSDK = new TheOneSDK(API_KEY);

  // BOOKS
  const allBooks = await theOneSDK.Book.getAll();
  console.log('Got all books:', JSON.stringify(allBooks, null, 2));

  // CHAPTERS
  const allChapters = await theOneSDK.Chapter.getAll();
  console.log('Got all Chapters:', JSON.stringify(allChapters, null, 2));

  // MOVIES
  const allMovies = await theOneSDK.Movie.getAll();
  console.log('Got all Movies:', JSON.stringify(allMovies, null, 2));

  // CHARACTERS
  const allCharacters = await theOneSDK.Character.getAll(<RequestOptionsType>{
    limit: 10,
    page: 1,
    offset: 0,
  });
  console.log('Got all Characters:', JSON.stringify(allCharacters, null, 2));

  // QUOTES
  // Get a list of quotes from a character:
  const quotes = await theOneSDK.Quote.getQuotesByCharacter('5cf5805fb53e011a64671582', {
    limit: 5,
  });
  console.log(JSON.stringify(quotes, null, 2));
}

showExamples();
