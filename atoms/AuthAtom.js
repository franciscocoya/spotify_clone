import { atom } from 'recoil';

/* If user is in session (logged) */
const isLoggedAtomState = atom({
  key: 'isLoggedAtomState',
  default: false,
});

/* Indicates if current page is loading */
const isPageLoadingState = atom({
  key: 'isPageLoadingState',
  default: true,
});

export { isLoggedAtomState, isPageLoadingState };
