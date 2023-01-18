const apiBasePath = '/api';

// Auth routes
const signInRoute = `${apiBasePath}/auth/login`;
const signUpRoute = `${apiBasePath}/auth/signup`;

// Track routes
const homeTracks = `${apiBasePath}/song/all`;

export { signInRoute, signUpRoute, homeTracks };
