import { atom } from 'recoil';

/* Indicates if user is authenticated */
const isAuthenticatedState = atom({
  key: 'isAuthenticatedState',
  default: false,
});

/* Represents the authenticated token */
const authTokenState = atom({
  key: 'authTokenState',
  default: '',
});

export { isAuthenticatedState, authTokenState };
