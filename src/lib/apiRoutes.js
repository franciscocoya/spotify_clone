const apiBasePath = '/api';
const auxApi = process.env.NEXT_PUBLIC_AUX_API_ENDPOINT;

// Auth routes
const signInRoute = `${apiBasePath}/auth/login`;
const signUpRoute = `${apiBasePath}/auth/signup`;

// Track routes
const homeTracks = `${apiBasePath}/song/all`;
const uploadTrackRoute = `http://localhost:5500/track/new`;

// Artist routes
const artistRoute = `${apiBasePath}/artist`;

export { signInRoute, signUpRoute, homeTracks, artistRoute, uploadTrackRoute };
