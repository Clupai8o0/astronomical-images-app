import { atom } from 'recoil';
import { Pin } from '../types';

export const currentPinState = atom({
  key: 'currentPinState',
  default: {} as Pin
})