import fs from 'fs';
import path from 'path';
const { resolve } = path;

const localesNSContent = {
    en: [
        {
            content: fs.readFileSync(`src/locales/en/common.json`, 'utf8'),
            ns: 'common',
        },
        {
            content: fs.readFileSync(`src/locales/en/contact.json`, 'utf8'),
            ns: 'contact',
        },
        {
            content: fs.readFileSync(`src/locales/en/faq.json`, 'utf8'),
            ns: 'faq',
        },
    ],
    de: [
        {
            content: fs.readFileSync(`src/locales/de/common.json`, 'utf8'),
            ns: 'common',
        },
        {
            content: fs.readFileSync(`src/locales/de/contact.json`, 'utf8'),
            ns: 'contact',
        },
        {
            content: fs.readFileSync(`src/locales/de/faq.json`, 'utf8'),
            ns: 'faq',
        },
    ],
};

const availableLocales = [
    { lang: 'de', text: 'Deutsch' },
    { lang: 'en', text: 'English' },
];

const defaultLocales = { lang: 'de', text: 'Deutsch' };

export async function createPages({ actions, graphql, reporter }) {
    const { createPage } = actions;

    const blogPostTemplate = resolve(`src/templates/blog-post.tsx`);
    const shopArticleTemplate = resolve(`src/templates/shop-article.tsx`);

    const result = await graphql(`
        {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
                edges {
                    node {
                        frontmatter {
                            path
                            title
                        }
                    }
                }
            }
        }
    `);
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.frontmatter.title != null && node.frontmatter.title.length > 0) {
            createPageForEachLanguage(createPage, blogPostTemplate, node.frontmatter.path);
        } else {
            createPageForEachLanguage(createPage, shopArticleTemplate, node.frontmatter.path);
        }
    });
}

function createPageForEachLanguage(createPage, component, originalPath) {
    availableLocales.map(({ lang }) => {
        let localizedPath = `/${lang}${originalPath}`;
        if (defaultLocales.lang === lang) {
            localizedPath = originalPath;
        }

        const localePage = {
            component: component,
            originalPath: originalPath,
            path: localizedPath,
            context: {
                availableLocales,
                locale: lang,
                routed: true,
                data: localesNSContent[lang],
                originalPath: originalPath,
            },
        };
        createPage(localePage);
    });
}

export async function onCreatePage({ page, actions: { createPage, deletePage } }) {
    if (/^\/dev-404-page\/?$/.test(page.path)) {
        return;
    }

    // Delete the original page (since we are gonna create localized versions of it)
    deletePage(page);

    // Create one page for each locale
    availableLocales.map(({ lang }) => {
        let localizedPath = `/${lang}${page.path}`;
        if (defaultLocales.lang === lang) {
            localizedPath = page.path;
        }

        const localePage = {
            ...page,
            originalPath: page.path,
            path: localizedPath,
            context: {
                availableLocales,
                locale: lang,
                routed: true,
                data: localesNSContent[lang],
                originalPath: page.path,
            },
        };
        createPage(localePage);
    });
}
