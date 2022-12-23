import { RequestOptionsType } from '../types/types';

export function buildOptions(reqOpt?: RequestOptionsType): string {
  if (!reqOpt) return '';
  const limit = reqOpt.limit;
  const page = reqOpt.page;
  const offset = reqOpt.offset;
  const params = [];

  if (limit) params.push(`limit=${limit}`);
  if (page) params.push(`page=${page}`);
  if (offset) params.push(`offset=${offset}`);

  // TODO: Filtering
  return '?' + `${params.join('&')}`;
}
