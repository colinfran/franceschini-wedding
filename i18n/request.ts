/**
 * Generates a request configuration for internationalization (i18n) for this Next.js application.
 * This function retrieves the 'accept-language' header from the incoming request to determine the preferred language of the user.
 * It then extracts the primary language code (e.g., 'en' from 'en-US') and uses it to load the corresponding locale messages.
 * @returns {Promise<{ locale: string, messages: any }>} An object containing the locale and the corresponding messages.
 */
import {getRequestConfig} from 'next-intl/server';
import {headers} from 'next/headers';

export default getRequestConfig(async () => {
  const acceptLanguage = headers().get('accept-language');
  const locale = (acceptLanguage?.split(',')[0].split('-')[0] || 'en');
  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default
  };
});