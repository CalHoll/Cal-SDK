import { AxiosError } from 'axios';

export function handleError(error: AxiosError) {
  console.log(`Error encountered: ${error}`);
}
