import { atom } from 'recoil';
import { Pin } from '../types';

export const dataState = atom({
  key: "dataState",
  default: [] as Pin[]
})