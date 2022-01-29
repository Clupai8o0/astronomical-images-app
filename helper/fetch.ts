import { API_FEED, API_KEY } from './constants';

export const fetchPictures = async (count: number = 30) => {
  const resp = await fetch(`${API_FEED}${process.env.API_KEY || API_KEY}&count=${count}`);
  const data = await resp.json();
  console.log(data);
}