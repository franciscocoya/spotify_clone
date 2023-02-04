const basename = process.env.NEXT_PUBLIC_BASE;
const homeRoute = `${basename}/`;

const publicRoutes = ['/login', '/signup'];

export { homeRoute, basename, publicRoutes };
