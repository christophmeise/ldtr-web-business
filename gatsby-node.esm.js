import crypto from 'crypto';
import fs from 'fs';
import { google } from 'googleapis';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

require('dotenv').config({
    path: `.env`,
});

const { resolve } = path;
const __dirname = dirname(fileURLToPath(import.meta.url));

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
        {
            content: fs.readFileSync(`src/locales/en/blog.json`, 'utf8'),
            ns: 'blog',
        },
        {
            content: fs.readFileSync(`src/locales/en/innerlight-hypnotherapy.json`, 'utf8'),
            ns: 'hypnotherapy',
        },
        {
            content: fs.readFileSync(`src/locales/en/rtt.json`, 'utf8'),
            ns: 'rtt',
        },
        {
            content: fs.readFileSync(`src/locales/en/rtt-areas.json`, 'utf8'),
            ns: 'rtt-areas',
        },
        {
            content: fs.readFileSync(`src/locales/en/shop.json`, 'utf8'),
            ns: 'shop',
        },
        {
            content: fs.readFileSync(`src/locales/en/testimonials.json`, 'utf8'),
            ns: 'testimonials',
        },
        {
            content: fs.readFileSync(`src/locales/en/business.json`, 'utf8'),
            ns: 'business',
        }
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
        {
            content: fs.readFileSync(`src/locales/de/blog.json`, 'utf8'),
            ns: 'blog',
        },
        {
            content: fs.readFileSync(`src/locales/de/innerlight-hypnotherapy.json`, 'utf8'),
            ns: 'hypnotherapy',
        },
        {
            content: fs.readFileSync(`src/locales/de/rtt.json`, 'utf8'),
            ns: 'rtt',
        },
        {
            content: fs.readFileSync(`src/locales/de/rtt-areas.json`, 'utf8'),
            ns: 'rtt-areas',
        },
        {
            content: fs.readFileSync(`src/locales/de/shop.json`, 'utf8'),
            ns: 'shop',
        },
        {
            content: fs.readFileSync(`src/locales/de/testimonials.json`, 'utf8'),
            ns: 'testimonials',
        },
        {
            content: fs.readFileSync(`src/locales/de/business.json`, 'utf8'),
            ns: 'business',
        }
    ],
};

const availableLocales = [
    { lang: 'de', text: 'Deutsch' },
    { lang: 'en', text: 'English' },
];

const defaultLocales = { lang: 'de', text: 'Deutsch' };

export async function sourceNodes({ actions }) {
    const { createNode } = actions;

    // google auth logic
    const scopes = 'https://www.googleapis.com/auth/analytics.readonly';
    const jwt = new google.auth.JWT(
        process.env.GATSBY_CLIENT_EMAIL,
        null,
        process.env.GATSBY_GOOGLE_API_CLIENT_KEY.replace(new RegExp('\\\\n', 'g'), '\n'),
        scopes,
    );
    await jwt.authorize();

    const analyticsReporting = google.analyticsreporting({
        version: 'v4',
        auth: jwt,
    });

    // Analytics Reporting v4 query
    const result = await analyticsReporting.reports.batchGet({
        requestBody: {
            reportRequests: [
                {
                    viewId: '226079807',
                    dateRanges: [
                        {
                            startDate: '30DaysAgo',
                            endDate: 'today',
                        },
                    ],
                    metrics: [
                        {
                            expression: 'ga:pageviews',
                        },
                    ],
                    dimensions: [
                        {
                            name: 'ga:pagePath',
                        },
                    ],
                    orderBys: [
                        {
                            sortOrder: 'DESCENDING',
                            fieldName: 'ga:pageviews',
                        },
                    ],
                },
            ],
        },
    });

    // Add analytics data to graphql
    const { rows } = result.data.reports[0].data;
    for (const { dimensions, metrics } of rows) {
        const path = dimensions[0];
        const totalCount = metrics[0].values[0];
        createNode({
            path,
            totalCount: Number(totalCount),
            id: path,
            internal: {
                type: `PageViews`,
                contentDigest: crypto.createHash(`md5`).update(JSON.stringify({ path, totalCount })).digest(`hex`),
                mediaType: `text/plain`,
                description: `Page views per path`,
            },
        });
    }
}

export function onCreateWebpackConfig({ actions }) {
    actions.setWebpackConfig({
        resolve: {
            alias: { '../../theme.config$': path.join(__dirname, 'src/semantic/theme.config') },
        },
    });
}

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
