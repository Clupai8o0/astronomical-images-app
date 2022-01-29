import { atom } from 'recoil';

export const loadingState = atom({
  key: 'loadingState',
  default: true
})

export const stopLoadingState = atom({
  key: 'stopLoadingState',
  default: false
})

export const routeChangeState = atom({
  key: "routeChangeState",
  default: false
})