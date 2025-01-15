/**
 * Generates a request configuration for internationalization (i18n) for this Next.js application.
 * This function retrieves the 'accept-language' header from the incoming request to determine the preferred language of the user.
 * It then extracts the primary language code (e.g., 'en' from 'en-US') and uses it to load the corresponding locale messages.
 * @returns {Promise<{ locale: string, messages: any }>} An object containing the locale and the corresponding messages.
 */
import {getRequestConfig} from 'next-intl/server';
import {headers, cookies} from 'next/headers';
import enMessages from '../locales/en.json'; // Preload default locale messages
import esMessages from '../locales/es.json'; // Preload other locales if common

type LocaleMessages = Record<string, any>;

// Preload common locales
const localeMessages: Record<string, LocaleMessages> = {
  en: enMessages,
  es: esMessages,
};

const detectLocale = (): string => {
  const acceptLanguage = headers().get('accept-language');
  const localeCookie = cookies().get('locale')?.value;
  let locale = localeCookie;
  if (!locale) {
    locale = acceptLanguage?.split(',')[0].split('-')[0] || 'en'; // Default to 'en'
  }
  return locale;
}


export default getRequestConfig(async () => {
  const locale = detectLocale();
  const messages = localeMessages[locale] 
    ? localeMessages[locale] 
    : (await import(`../locales/${locale}.json`)).default;
  return {
    locale,
    messages
  };
});