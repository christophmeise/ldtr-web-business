import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: {
            de: {
                common: require('../../locales/de/common.json'),
                contact: require('../../locales/de/contact.json'),
            },
            en: {
                common: require('../../locales/en/common.json'),
                contact: require('../../locales/en/contact.json'),
            },
        },
        ns: ['common', 'contact'],
        defaultNS: 'common',
        returnObjects: true,
        debug: process.env.NODE_ENV === 'development',

        interpolation: {
            escapeValue: false, // not needed for react!!
        },

        react: {
            wait: true,
            useSuspense: false,
        },
    });

export default i18n;
