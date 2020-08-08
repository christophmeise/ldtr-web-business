/* eslint-disable no-undef */
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `Inner Light`,
        author: `Christoph Meise`,
        siteUrl: `https://loving-poincare-49748d.netlify.app/`,
        description: `Spread love, light & consciousness`,
        social: {
            instagram: `love.dream.travel.repeat`,
        },
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: process.env.GATSBY_GOOGLE_TRACKING_ID,
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: true,
                // Required for Germany
                anonymize: true,
                // Setting this parameter is also optional
                // respectDNT: true,
                // Avoids sending pageview hits from custom paths
                // exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                //sampleRate: 5,
                //siteSpeedSampleRate: 10,
                //cookieDomain: "example.com",
            },
        },
        'gatsby-plugin-catch-links',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-less',
        /*         {
            resolve: `gatsby-source-stripe`,
            options: {
                objects: ['Product', 'Sku'],
                secretKey: process.env.STRIPE_SECRET_KEY,
                downloadFiles: false,
            },
        }, */
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 0.4, // Percentage of an element's area that needs to be visible to launch animation
                once: true, // Defines if animation needs to be launched once
                disable: false, // Flag for disabling animations

                // Advanced Options
                selector: '[data-sal]', // Selector of the elements to be animated
                animateClassName: 'sal-animate', // Class name which triggers animation
                disabledClassName: 'sal-disabled', // Class name which defines the disabled state
                rootMargin: '0% 50%', // Corresponds to root's bounding box margin
                enterEventName: 'sal:in', // Enter event name
                exitEventName: 'sal:out', // Exit event name
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/posts`,
                name: 'posts',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/articles`,
                name: 'articles',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/uploads`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // CommonMark mode (default: true)
                commonmark: true,
                // Footnotes mode (default: true)
                footnotes: true,
                // Pedantic mode (default: true)
                pedantic: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                // Plugins configs
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Inner Light`,
                short_name: `Inner Light`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `static/Logo.png`,
                cache_busting_mode: 'none',
                theme_color_in_head: false,
            },
        },
        'gatsby-plugin-offline',
    ],
};
