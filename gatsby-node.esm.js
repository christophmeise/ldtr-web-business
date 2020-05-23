import { resolve } from 'path';

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
        if (node.frontmatter.title != null) {
            createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {}, // additional data can be passed via context
            });
        } else {
            createPage({
                path: node.frontmatter.path,
                component: shopArticleTemplate,
                context: {}, // additional data can be passed via context
            });
        }
    });
}
