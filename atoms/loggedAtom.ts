import { atom } from 'recoil';

export const loggedState = atom({
  key: 'loggedState',
  default: false
})