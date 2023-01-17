import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(req) {
  const { pathname } = req.nextUrl;
  console.log(pathname);
  //process.env.LOGGED_COOKIE
  const cookie = req.cookies.get('logged');

  if (
    !pathname.startsWith('/login') &&
    !pathname.startsWith('/signup') &&
    !cookie
  ) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: '/',
};
