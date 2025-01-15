/**
 * Middleware function to handle locale determination and setting.
 * This middleware checks for a 'locale' cookie in the incoming request. If the cookie is not present,
 * it attempts to determine the locale from the 'accept-language' header of the request. If the locale
 * is determined from the header, it sets a 'locale' cookie for future requests.
 * @param {NextRequest} request - The incoming request object.
 * @returns {Promise<NextResponse>} - The response object, potentially with a 'locale' cookie set.
 */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const localeCookie = request.cookies.get('locale');
  const acceptLanguage = request.headers.get('accept-language');
  let locale: string | undefined = localeCookie?.value;
  if (!locale) {
    locale = acceptLanguage?.split(',')[0].split('-')[0] || 'en';
    const response = NextResponse.next();
    response.cookies.set('locale', locale, { path: '/' });
    return response;
  }
  return NextResponse.next();
}

