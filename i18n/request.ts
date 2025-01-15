import {getRequestConfig} from 'next-intl/server';
import {cookies, headers} from 'next/headers';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const acceptLanguage = headers().get('accept-language');
  const locale = (acceptLanguage?.split(',')[0].split('-')[0] || 'en'); // Default to 'en' if no locale is found 
  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default
  };
});