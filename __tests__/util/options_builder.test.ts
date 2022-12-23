import { RequestOptionsType } from '../../src/types/types';
import { buildOptions } from '../../src/util/options_builder';

test('Builds query params for limit', () => {
  let generatedOptions = buildOptions({ limit: 100 });
  expect(generatedOptions).toBe('?limit=100');
});

test('Builds query params for limit, page, and offset', () => {
  let generatedOptions = buildOptions({ limit: 100, page: 1, offset: 1 });
  expect(generatedOptions).toBe('?limit=100&page=1&offset=1');
});
