import i18n from 'i18next';
export const defaultLocale = 'en';
export const defaultNamespace = 'common';

export const options = {
    fallbackLng: defaultLocale,
    /*   resources: {
        de: {
            common: require('../../locales/de/common.json'),
            contact: require('../../locales/de/contact.json'),
        },
        en: {
            common: require('../../locales/en/common.json'),
            contact: require('../../locales/en/contact.json'),
        },
    }, */
    ns: [defaultNamespace, 'contact', 'faq'],
    defaultNS: defaultNamespace,
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
        escapeValue: false, // not needed for react!!
    },

    react: {
        wait: true,
        useSuspense: false,
    },

    initImmediate: false, // Important for SSR to work
};
export default () => {
    // .use(LanguageDetector).use(initReactI18next)
    i18n.init(options);

    return i18n;
};
