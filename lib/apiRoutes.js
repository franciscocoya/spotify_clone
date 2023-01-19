const apiBasePath = '/api';

// Auth routes
const signInRoute = `${apiBasePath}/auth/login`;
const signUpRoute = `${apiBasePath}/auth/signup`;

// Track routes
const homeTracks = `${apiBasePath}/song/all`;

// Artist routes
const artistRoute = `${apiBasePath}/artist`;

export { signInRoute, signUpRoute, homeTracks, artistRoute };
