import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const localeCookie = request.cookies.get('locale');
  const acceptLanguage = request.headers.get('accept-language');
  let locale: string | undefined = localeCookie?.value;
  // If no locale cookie is set, determine the locale from the 'accept-language' header
  if (!locale) {
    locale = acceptLanguage?.split(',')[0].split('-')[0] || 'en';
    const response = NextResponse.next();
    // Set the locale cookie for future requests
    response.cookies.set('locale', locale, { path: '/' });
    return response;
  }
  // Continue with the request
  return NextResponse.next();
}

