import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host');
  const url = req.nextUrl.clone();

  if (host === 'franceschiniwedding.com') {
    // Redirect to the same path on franceschini.wedding
    url.hostname = 'franceschini.wedding';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
